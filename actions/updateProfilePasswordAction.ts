'use server';

import prisma from '@/lib/db';
import { passwordSchema } from '@/utils/validation';
import { checkAuth } from '@/data-layer/checkAuth';
import bcrypt from 'bcryptjs';

export async function updateProfilePassword(
    prevState: any,
    formData: FormData
) {
    const { userId } = await checkAuth();

    if (userId) {
        const userPassword = {
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        };

        // Validate name input:
        const validatePassword = passwordSchema.safeParse(userPassword);
        if (!validatePassword.success) {
            const fieldErrors = validatePassword.error.flatten().fieldErrors;

            return {
                success: false,
                message: {
                    errorPassword: fieldErrors?.password,
                    errorConfirmedPassword: fieldErrors?.confirmPassword,
                },
            };
        }

        // On valid passwords input, hash the password:
        const hash = await bcrypt.hash(validatePassword.data.password, 10);
        try {
            await prisma.user.update({
                where: { id: userId },
                data: { password: hash },
            });

            return {
                success: true,
                // message: 'Password update: Success!',
            };
        } catch (err) {
            return {
                success: false,
                message: {
                    errorGeneric:
                        'Uknown error, could not update your password',
                },
            };
        }
    } else {
        return {
            success: false,
            message: { errorNotFound: 'User not found' },
            // status: 400,
        };
    }
}
