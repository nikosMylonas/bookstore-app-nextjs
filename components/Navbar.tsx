'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { attributes } from '@/config/attributes';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import LogoutAlert from './LogoutAlert';

const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const pathname = usePathname();
    return (
        <nav>
            <div className="nav-section nav-main">
                <div
                    className={
                        pathname === attributes.home.active
                            ? 'nav-item active'
                            : 'nav-item'
                    }
                >
                    <Link href="/">Home</Link>
                </div>
                {isAuthenticated ? (
                    <>
                        <div
                            className={
                                pathname === attributes.books.active
                                    ? 'nav-item active'
                                    : 'nav-item'
                            }
                        >
                            <Link href="/books">My Books</Link>
                        </div>
                        <div
                            className={
                                pathname === attributes.addBook.active
                                    ? 'nav-item active'
                                    : 'nav-item'
                            }
                        >
                            <Link href="/add-book">Add Book</Link>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
            <hr className="md:hidden" />
            <div className="nav-section nav-section-btn">
                {isAuthenticated ? (
                    <>
                        <div
                            className={
                                pathname === attributes.profile.active
                                    ? 'nav-item nav-btn active'
                                    : 'nav-item nav-btn'
                            }
                        >
                            <Link href="/profile">Profile</Link>
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="nav-item nav-btn">
                                    Logout
                                </button>
                            </AlertDialogTrigger>
                            <LogoutAlert />
                        </AlertDialog>
                    </>
                ) : (
                    <>
                        <div
                            className={
                                pathname === attributes.login.active
                                    ? 'nav-item nav-btn active'
                                    : 'nav-item nav-btn'
                            }
                        >
                            <Link href="/login">Login</Link>
                        </div>
                        <div
                            className={
                                pathname === attributes.signup.active
                                    ? 'nav-item nav-btn active'
                                    : 'nav-item nav-btn'
                            }
                        >
                            <Link href="/signup">Signup</Link>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
