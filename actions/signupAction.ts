'use server';

import { redirect } from 'next/navigation';
import { signupSchema } from '@/utils/validation';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function signupAction(prevState: any, formData: FormData) {
    // Form data:
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    };

    // Validate input data:
    const validateUser = signupSchema.safeParse(user);
    if (!validateUser.success) {
        // console.log('User Input Error:', validateUser.error.flatten());
        const fieldErrors = validateUser.error.flatten().fieldErrors;

        return {
            error: {
                errorName: fieldErrors?.name,
                errorEmail: fieldErrors?.email,
                errorPassword: fieldErrors?.password,
                errorConfirmedPassword: fieldErrors?.confirmPassword,
            },
        };
    }
    // console.log('User Input:', validateUser);

    // Check if email already exists in DB:
    const isEmailExisting = await prisma.user.findFirst({
        where: { email: validateUser.data.email },
    });

    if (isEmailExisting) {
        return {
            error: {
                errorUniqueEmail:
                    'The provided email already exists. Please provide another email',
            },
        };
    }

    // On valid input (user credentials), hash the password:
    const hash = await bcrypt.hash(validateUser.data.password, 10);

    // Create a user in DB:
    try {
        const newUser = await prisma.user.create({
            data: {
                name: validateUser.data.name as string,
                email: validateUser.data.email as string,
                password: hash as string,
            },
        });

        // return newUser;
    } catch (err) {
        // console.log('Error:', err);
        return { error: { errorGeneric: 'Uknown error. Please try again:' } };
    }

    redirect('/login');
}
