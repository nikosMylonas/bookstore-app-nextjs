import { redirect } from 'next/navigation';

export function loginRedirect() {
    redirect('/login');
}
