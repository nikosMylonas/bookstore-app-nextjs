'use client';

import { useState, useActionState } from 'react';
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { updateProfilePassword } from '@/actions/updateProfilePasswordAction';

const UpdatePasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPasword] = useState('');

    const [state, formAction, isPending] = useActionState(
        updateProfilePassword,
        null
    );

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
                <DialogDescription>
                    Change your account's password.
                </DialogDescription>
            </DialogHeader>

            <form action={formAction}>
                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Your password..."
                    />
                    {state?.success === false && (
                        <p className="text-sm text-red-700">
                            {state.message?.errorPassword}
                        </p>
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
                    {state?.success === false && (
                        <p className="text-sm text-red-700">
                            {state.message?.errorConfirmedPassword}
                        </p>
                    )}
                </div>
                {state?.success === true && (
                    <p className="text-sm text-green-700">
                        Password update: Success!
                    </p>
                )}
                <button className="w-full mt-2 btn-submit" type="submit">
                    Update
                </button>
            </form>

            <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                    <Button
                        type="button"
                        variant="secondary"
                        className="w-full hover:bg-stone-400 transition-colors duration-300"
                    >
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    );
};

export default UpdatePasswordForm;
