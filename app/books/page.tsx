import { Metadata } from 'next';
import { Suspense } from 'react';
import { attributes } from '@/config/attributes';
import Loading from '../loading';
import { getBooksUser } from '@/data-layer/getBooksUser';
import Link from 'next/link';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import RemoveBookAlert from '@/components/RemoveBookAlert';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';

export const metadata: Metadata = {
    title: attributes.books.title,
    description: attributes.books.description,
    icons: {
        icon: './favicon.ico',
    },
};

const Books = async () => {
    const books = await getBooksUser();

    return (
        <main>
            <div className="container-p mt-6">
                <h1>
                    Booklist{' '}
                    {books.length ? (
                        <span className="badge">{books.length}</span>
                    ) : (
                        ''
                    )}
                </h1>
                {books.length > 0 ? (
                    <>
                        <p className="mb-4 text-center">
                            Your booklist includes the following books:
                        </p>
                        <div className="w-full flex flex-col gap-y-4 justify-center content-center py-2">
                            <Suspense fallback={<Loading />}>
                                {books.map((book, index) => (
                                    <div
                                        className="book-container w-full"
                                        key={book.id}
                                    >
                                        <div className="book-index">
                                            {index + 1}.
                                        </div>
                                        <div className="book-content">
                                            <span className="book-title">
                                                Title: {book.title}
                                            </span>{' '}
                                            <span className="book-author">
                                                Author: {book.author}
                                            </span>
                                            <span className="book-publisher">
                                                Publisher: {book.publisher},{' '}
                                                <span className="italic">
                                                    {book.year}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex justify-center gap-x-4 md:self-center">
                                            <button className="btn-select w-[120px]">
                                                <Link
                                                    href={`/books/${book.id}`}
                                                >
                                                    Book Info
                                                </Link>
                                            </button>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <button className="btn-select w-[120px] bg-red-600 hover:bg-red-400 transition-colors duration-300">
                                                        Remove
                                                    </button>
                                                </AlertDialogTrigger>
                                                <RemoveBookAlert
                                                    bookId={book.id}
                                                    bookTitle={book.title}
                                                />
                                            </AlertDialog>
                                        </div>
                                    </div>
                                ))}
                            </Suspense>
                            <div>
                                <p className="text-center">
                                    Continue adding books:
                                </p>

                                <ButtonNavigate
                                    title="Add Book"
                                    url="/add-book"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="book-container">
                        <div className="w-full flex flex-col gap-y-4 justify-center content-center py-2">
                            <p className="text-center text-2xl font-semibold">
                                <em>Your booklist is empty!</em>
                            </p>

                            <p className="text-center">
                                To add any books to your booklist, please visit
                                the Bookstore page:
                            </p>

                            <ButtonNavigate title="Add Book" url="/add-book" />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Books;
