import prisma from '@/lib/db';
import { checkAuth } from './checkAuth';
import { loginRedirect } from '@/utils/loginRedirect';

export async function getAllBooks() {
    const { isAuthenticated, userId } = await checkAuth();

    // console.log('UserID:', userId);
    if (!isAuthenticated) {
        loginRedirect();
    }

    try {
        const bookListFull = await prisma.book.findMany({
            select: {
                id: true,
                title: true,
                year: true,
                author: { select: { name: true } },
                publisher: { select: { name: true } },
                users: { select: { id: true }, where: { id: userId } },
            },
        });

        const bookListFullUser = bookListFull.filter(
            (book) => book.users.length !== 1
        );

        return bookListFullUser;
    } catch (err) {
        throw new Error('Uknown error.');
    }
}
