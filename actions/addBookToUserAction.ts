'use server';

import prisma from '@/lib/db';
import { checkAuth } from '@/data-layer/checkAuth';
import { revalidatePath } from 'next/cache';

export async function addBookToUser(bookId: string) {
    const { userId } = await checkAuth();

    if (userId) {
        try {
            const res = await prisma.user.findUnique({
                where: { id: userId },
                select: { books: true },
            });

            await prisma.user.update({
                where: { id: userId },
                data: {
                    books: {
                        connect: { id: bookId },
                    },
                },
            });

            // return {
            //     success: true,
            // };
        } catch (err) {
            return { error: 'Uknown error. Please try again:' };
        }
    } else {
        console.log('User not found');
        return {
            error: {
                userNotFound: 'User not found',
                status: 400,
            },
        };
    }

    revalidatePath('/add-book', 'layout');
}