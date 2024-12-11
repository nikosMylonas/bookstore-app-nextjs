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
import { updateProfileName } from '@/actions/updateProfileNameAction';

const UpdateNameForm = ({ name }: { name: string }) => {
    const [username, setUsername] = useState(name);
    const [state, formAction, isPending] = useActionState(
        updateProfileName,
        null
    );

    // console.log('State:', state);

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Change Name</DialogTitle>
                <DialogDescription>
                    Change your account's name.
                </DialogDescription>
            </DialogHeader>
            <form action={formAction}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        id="name"
                        // placeholder="Your name..."
                    />

                    {state?.success === false && (
                        <p className="text-sm text-red-700">
                            Something went wrong.
                        </p>
                    )}
                    {state?.success === true && (
                        <p className="text-sm text-green-700">
                            Name update: Success!
                        </p>
                    )}
                </div>
                <button
                    // className="w-full mt-2 bg-stone-900 hover:bg-stone-700 transition-colors duration-300"
                    className="w-full mt-2 btn-submit"
                    type="submit"
                >
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

export default UpdateNameForm;
