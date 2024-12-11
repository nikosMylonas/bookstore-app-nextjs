import prisma from '@/lib/db';
import { checkAuth } from './checkAuth';
import { loginRedirect } from '@/utils/loginRedirect';

export async function getUser() {
    const { isAuthenticated, userId } = await checkAuth();

    if (!isAuthenticated) {
        loginRedirect();
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        return user;
    } catch (err) {
        throw new Error('Uknown error.');
    }
}
