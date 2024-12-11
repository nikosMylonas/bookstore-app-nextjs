import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import * as jose from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    // Check for cookies:
    const cookie = (await cookies()).get('Authentication');
    if (!cookie) {
        return NextResponse.redirect(new URL('/login', req.url));
    } else {
        // Validate cookie:
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const jwtValue = cookie.value;

        try {
            const { payload } = await jose.jwtVerify(jwtValue, secret, {});
            const userId = payload.sub;
        } catch (err) {
            console.log('Error:', err);
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}

export const config = {
    matcher: ['/books/:id*', '/add-book', '/profile'],
};
