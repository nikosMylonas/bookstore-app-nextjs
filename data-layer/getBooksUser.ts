import prisma from '@/lib/db';
import { checkAuth } from './checkAuth';
import { loginRedirect } from '@/utils/loginRedirect';

export async function getBooksUser() {
    const { isAuthenticated, userId } = await checkAuth();

    // console.log('UserID:', userId);
    if (!isAuthenticated) {
        loginRedirect();
    }

    try {
        const userBooks = await prisma.user.findFirst({
            where: { id: userId },
            include: {
                books: {
                    include: { author: true, publisher: true, category: true },
                },
            },
        });

        // console.log('userBooks:', userBooks);
        if (userBooks) {
            const bookListUser = userBooks.books.map((book) => ({
                id: book.id,
                title: book.title,
                author: book.author.name,
                publisher: book.publisher.name,
                category: book.category.category,
                description: book.description,
                year: book.year,
            }));
            // console.log('Books for User:', bookListUser);
            return bookListUser;
        } else {
            return [];
        }
    } catch (err) {
        throw new Error('Uknown error');
    }
}
