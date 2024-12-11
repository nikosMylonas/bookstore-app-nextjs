import { Metadata } from 'next';
import { attributes } from '@/config/attributes';
import { getAllBooks } from '@/data-layer/getAllBooks';
import { Suspense } from 'react';
import Loading from '../loading';
import ButtonSelect from '@/components/Buttons/ButtonSelect';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';

export const metadata: Metadata = {
    title: attributes.addBook.title,
    description: attributes.addBook.description,
    icons: {
        icon: './favicon.ico',
    },
};

const AddBook = async () => {
    const books = await getAllBooks();
    return (
        <main>
            <div className="container-p mt-6">
                <h1>Add Book</h1>
                {/* <p className="mb-4 text-center">
                    You can add books to your list from the booklist below.
                </p> */}
                <h3 className="mb-4 text-center">
                    Booklist <span>({books.length} remaining books)</span>
                </h3>
                {books.length > 0 ? (
                    <Suspense fallback={<Loading />}>
                        {books.map((book, index) => (
                            <div
                                className="book-container bookstore-container"
                                key={book.id}
                            >
                                <div className="book-index">{index + 1}.</div>
                                <div className="book-content">
                                    <span className="book-title">
                                        Title: {book.title}
                                    </span>{' '}
                                    <span className="book-author">
                                        Author: {book.author.name}
                                    </span>
                                    <span className="book-publisher">
                                        Publisher: {book.publisher.name},{' '}
                                        <span className="italic">
                                            {book.year}
                                        </span>
                                    </span>
                                </div>
                                <ButtonSelect bookId={book.id} />
                            </div>
                        ))}
                    </Suspense>
                ) : (
                    <p className="error-p">
                        An unexpected error occured. Please, try again.
                    </p>
                )}
                <div className="text-center mt-8">
                    <p>Navigate back to your booklist.</p>
                    <ButtonNavigate title="Back" url="/books" />
                </div>
            </div>
        </main>
    );
};

export default AddBook;
