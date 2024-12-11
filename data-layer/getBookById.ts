import prisma from '@/lib/db';
import { checkAuth } from './checkAuth';
import { loginRedirect } from '@/utils/loginRedirect';

export async function getBookById(id: string) {
    const { isAuthenticated, userId } = await checkAuth();
    if (!isAuthenticated) {
        loginRedirect();
    }

    try {
        const bookRaw = await prisma.book.findUnique({
            where: { id },
            include: { author: true, publisher: true, category: true },
        });
        // console.log('Book:', book);

        const book = {
            id: bookRaw?.id,
            title: bookRaw?.title,
            author: bookRaw?.author.name,
            publisher: bookRaw?.publisher.name,
            category: bookRaw?.category.category,
            description: bookRaw?.description,
            year: bookRaw?.year,
        };
        return book;
    } catch (err) {
        throw new Error('Uknown error.');
    }
}
