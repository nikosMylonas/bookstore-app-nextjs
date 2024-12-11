import { z } from 'zod';

export const signupSchema = z
    .object({
        name: z
            .string()
            .min(1, 'Name is required')
            .max(16, 'Names must be at most 16 characters long'),
        email: z.string().email(),
        password: z
            .string()
            .min(6, 'Password must be between 6 and 12 characters long')
            .max(12, 'Password must be between 6 and 12 characters long'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords must match',
        path: ['confirmPassword'],
    });

export const loginSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(6, 'Password must be between 6 and 12 characters long')
        .max(12, 'Password must be between 6 and 12 characters long'),
});

export const nameSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .max(16, 'Names must be at most 16 characters long'),
});

export const passwordSchema = z
    .object({
        password: z
            .string()
            .min(6, 'Password must be between 6 and 12 characters long')
            .max(12, 'Password must be between 6 and 12 characters long'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords must match',
        path: ['confirmPassword'],
    });
