'use client';

import { loginAction } from '@/actions/loginAction';
import Link from 'next/link';
import { useActionState, useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');

    const [errors, formAction, isPending] = useActionState(loginAction, null);

    // console.log('Errors:', errors);

    const errorGeneric = errors?.error?.errorGeneric;
    const errorValidation = errors?.error?.errorValidation;
    const errorLogin = errors?.error?.errorLogin;
    const userNotFound = errors?.error?.userNotFound;
    const status = errors?.error?.status;

    return (
        <form action={formAction}>
            <div className="form-card bg-stone-200">
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        placeholder="Your email..."
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password..."
                    />
                </div>

                <button className="btn-submit" type="submit">
                    Login
                </button>
                <div className="mt-4">
                    {errorGeneric ? (
                        <p className="text-sm text-red-700 mb-2">
                            {errorGeneric}
                        </p>
                    ) : (
                        ''
                    )}
                    {userNotFound ? (
                        <p className="text-sm text-red-700 mb-2">
                            {userNotFound} - ({status})
                        </p>
                    ) : (
                        ''
                    )}
                    {errorValidation ? (
                        <p className="text-sm text-red-700 mb-2">
                            {errorValidation}
                        </p>
                    ) : (
                        ''
                    )}
                    {errorLogin ? (
                        <p className="text-sm text-red-700 mb-2">
                            {errorLogin}
                        </p>
                    ) : (
                        ''
                    )}
                </div>
                <p className="mt-6">
                    Already registered? <Link href="/signup">Signup</Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
