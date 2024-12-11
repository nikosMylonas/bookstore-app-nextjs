'use server';

import { loginSchema } from '@/utils/validation';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import { cookies } from 'next/headers';

export async function loginAction(prevState: any, formData: FormData) {
    // Form Data;
    const inputUser = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    // Validate input data:
    const validateLoginUser = loginSchema.safeParse(inputUser);
    if (!validateLoginUser.success) {
        return {
            error: {
                errorValidation: 'Invalid credentials',
            },
        };
    }

    // Lookup the user:
    try {
        const user = await prisma.user.findFirst({
            where: { email: validateLoginUser.data.email },
        });

        // console.log('User:', user);

        if (user) {
            // Compare provided password with hashed password in DB:
            const isCorrectPassword = await bcrypt.compare(
                validateLoginUser.data.password,
                user.password
            );

            if (!isCorrectPassword) {
                return {
                    error: {
                        errorLogin: 'Invalid credentials',
                    },
                };
            }
        } else {
            return {
                error: {
                    userNotFound: 'User not found',
                    status: 400,
                },
            };
        }

        // Create JWT Token:
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const alg = 'HS256';

        const jwt = await new jose.SignJWT({})
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setExpirationTime('1h')
            .setSubject(user.id.toString())
            .sign(secret);

        // console.log(jwt);

        (await cookies()).set('Authentication', jwt, {
            secure: true,
            httpOnly: true,
            expires: Date.now() + 24 * 60 * 60 * 100,
            path: '/',
            sameSite: 'strict',
        });
    } catch (err) {
        console.log('Error:', err);
        return { error: { errorGeneric: 'Uknown error. Please try again:' } };
    }

    redirect('/books');
}
