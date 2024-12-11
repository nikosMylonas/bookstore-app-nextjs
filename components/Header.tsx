import Link from 'next/link';
import Image from 'next/image';
import NavBar from './Navbar';
import { checkAuth } from '@/data-layer/checkAuth';
import Welcome from './Welcome';

const Header = async () => {
    const { isAuthenticated, name } = await checkAuth();
    return (
        <header>
            <div className="container-p py-6 flex flex-col md:flex-row justify-between gap-x-6 md:gap-x-4 gap-y-4 md:gap-y-0">
                <div className="logo w-full md:w-48">
                    <Link
                        href="/"
                        className="flex justify-center md:justify-start gap-x-2"
                    >
                        <Image
                            src="/images/mybooks.png"
                            width="50"
                            height="50"
                            alt="myBooks logo"
                            className="logo-img"
                        />
                        <span className="place-self-center">My Books</span>
                    </Link>
                </div>

                <NavBar isAuthenticated={isAuthenticated as boolean} />
            </div>
            {isAuthenticated ? <Welcome name={name as string} /> : ''}
        </header>
    );
};

export default Header;
