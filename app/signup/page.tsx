import { Metadata } from 'next';
import { Suspense } from 'react';
import { attributes } from '@/config/attributes';
import Loading from '../loading';
import SignupForm from '@/components/SignupForm';

export const metadata: Metadata = {
    title: attributes.signup.title,
    description: attributes.signup.description,
    icons: {
        icon: './favicon.ico',
    },
};

const Signup = () => {
    return (
        <main>
            <div className="container-p mt-6">
                <h1>Signup Form</h1>
                <Suspense fallback={<Loading />}>
                    <SignupForm />
                </Suspense>
            </div>
        </main>
    );
};

export default Signup;
