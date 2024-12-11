import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import * as jose from 'jose';

export async function checkAuth() {
    // Read session cookie:
    const cookie = (await cookies()).get('Authentication');

    // If cookie doesn't exist return false:
    if (!cookie) {
        return { isAuthenticated: false };
    }

    // If cookie exists, retrieve User's ID:
    const jwtValue = cookie.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jose.jwtVerify(jwtValue, secret, {});
    // console.log('Payload:', payload.sub);

    const userId = payload.sub;
    // console.log('UserId:', userId);
    try {
        const user = await prisma.user.findFirst({ where: { id: userId } });
        return { isAuthenticated: true, userId, name: user?.name };
    } catch (err) {
        return { isAuthenticated: false };
    }
}
