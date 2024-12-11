'use client';

import { signupAction } from '@/actions/signupAction';
import Link from 'next/link';
import { useActionState, useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPasword] = useState('');

    const [errors, formAction, isPending] = useActionState(signupAction, null);

    const errorName = errors?.error?.errorName;
    const errorEmail = errors?.error?.errorEmail;
    const errorUniqueEmail = errors?.error?.errorUniqueEmail;
    const errorPassword = errors?.error?.errorPassword;
    const errorConfirmedPassword = errors?.error?.errorConfirmedPassword;
    const errorGeneric = errors?.error?.errorGeneric;

    return (
        <form action={formAction}>
            <div className="form-card bg-stone-200">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="name"
                        placeholder="Your name..."
                    />
                    {errorName ? (
                        <p className="text-sm text-red-700">{errorName[0]}</p>
                    ) : (
                        ''
                    )}
                </div>
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
                    {errorEmail ? (
                        <p className="text-sm text-red-700">{errorEmail[0]}</p>
                    ) : (
                        ''
                    )}
                    {errorUniqueEmail ? (
                        <p className="text-sm text-red-700">
                            {errorUniqueEmail}
                        </p>
                    ) : (
                        ''
                    )}
                </div>

                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Your password..."
                    />
                    {errorPassword ? (
                        <p className="text-sm text-red-700">
                            {errorPassword[0]}
                        </p>
                    ) : (
                        ''
                    )}
                </div>

                <div className="form-item">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => setConfirmedPasword(e.target.value)}
                        id="confirm-password"
                        placeholder="Confirm password..."
                    />
                    {errorConfirmedPassword ? (
                        <p className="text-sm text-red-700">
                            {errorConfirmedPassword[0]}
                        </p>
                    ) : (
                        ''
                    )}
                </div>

                <button className="btn-submit" type="submit">
                    Signup
                </button>
                {errorGeneric ? (
                    <p className="text-sm text-red-700 mt-4">{errorGeneric}</p>
                ) : (
                    ''
                )}

                <p className="mt-6">
                    Already registered? <Link href="/login">Login</Link>
                </p>
            </div>
        </form>
    );
};

export default SignupForm;
