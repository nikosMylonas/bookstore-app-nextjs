'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutAction() {
    // Retrieve cookie:
    const cookie = (await cookies()).get('Authentication');
    if (!cookie) {
        return { error: 'No JWT cookie found' };
    }

    (await cookies()).delete('Authentication');
    redirect('/login');
}
