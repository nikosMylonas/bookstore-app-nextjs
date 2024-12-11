import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '../loading';
import { attributes } from '@/config/attributes';
import LoginForm from '@/components/LoginForm';

export const metadata: Metadata = {
    title: attributes.login.title,
    description: attributes.login.description,
    icons: {
        icon: './favicon.ico',
    },
};

const Login = () => {
    return (
        <main>
            <div className="container-p mt-6">
                <h1>Login Form</h1>
                <Suspense fallback={<Loading />}>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
};

export default Login;
