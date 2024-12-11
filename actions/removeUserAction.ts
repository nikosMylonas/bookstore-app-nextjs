'use server';

import prisma from '@/lib/db';
import { checkAuth } from '@/data-layer/checkAuth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

export async function removeUser(id: string) {
    const { userId } = await checkAuth();

    if (userId) {
        try {
            const cookie = (await cookies()).get('Authentication');
            if (!cookie) {
                return { error: 'No JWT cookie found' };
            }

            await prisma.user.delete({
                where: { id: userId },
            });

            (await cookies()).delete('Authentication');
        } catch (err) {
            return {
                msg: 'Uknown error. Please try again το delete your account',
            };
        }
    } else {
        return {
            msg: 'User not found',
            status: 400,
        };
    }
    redirect('/');
}
