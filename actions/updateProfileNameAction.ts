'use server';

import prisma from '@/lib/db';
import { nameSchema } from '@/utils/validation';
import { checkAuth } from '@/data-layer/checkAuth';
import { revalidatePath } from 'next/cache';

export async function updateProfileName(prevState: any, formData: FormData) {
    const { userId } = await checkAuth();
    // console.log('UserId:', userId);

    if (userId) {
        const username = { name: formData.get('name') };
        // console.log('Form Data:', username);

        // Validate name input:
        const validateName = nameSchema.safeParse(username);
        // console.log('Validate data:', validateName.data?.name);

        console.log('Validate Name:', validateName);
        if (!validateName.success) {
            const fieldErrors = validateName.error.flatten().fieldErrors;
            // console.log('Field Errors:', fieldErrors);

            return {
                success: false,
                message: fieldErrors?.name,
            };
        }

        try {
            await prisma.user.update({
                where: { id: userId },
                data: { name: validateName.data.name },
            });

            revalidatePath('/profile', 'layout');

            return {
                success: true,
                message: 'Name update: Success!',
            };
        } catch (err) {
            return {
                success: false,
                message: 'Uknown error, could not update your name',
            };
        }
    } else {
        return {
            success: false,
            message: 'User not found',
            // status: 400,
        };
    }
}
