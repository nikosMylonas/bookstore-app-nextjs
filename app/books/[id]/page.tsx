import { Metadata } from 'next';
import { Suspense } from 'react';
import { attributes } from '@/config/attributes';
import Loading from '@/app/loading';
import { getBookById } from '@/data-layer/getBookById';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';

export const metadata: Metadata = {
    title: attributes.booksInfo.title,
    description: attributes.booksInfo.description,
    icons: {
        icon: './favicon.ico',
    },
};

const Book = async ({ params }: { params: any }) => {
    const { id } = await params;
    // console.log('BookID:', id);
    const book = await getBookById(id);

    return (
        <main>
            <div className="container-p mt-6">
                <h1>Book Info</h1>
                {book.id ? (
                    <Suspense fallback={<Loading />}>
                        <div className="book-info">
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className="pr-4">Title:</td>
                                        <td className="title">{book.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Author:</td>
                                        <td className="author">
                                            {book.author}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Publisher:</td>
                                        <td className="publisher">
                                            {book.publisher}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Year:</td>
                                        <td className="year">{book.year}</td>
                                    </tr>

                                    <tr>
                                        <td className="pr-4">Category:</td>
                                        <td className="category">
                                            {book.category}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="pr-4">Description:</td>
                                        <td className="description">
                                            {book.description}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-center mt-6">
                            Click on the button below to return to your booklist
                            page.
                        </p>
                        <ButtonNavigate title="Return" url="/books" />
                    </Suspense>
                ) : (
                    <p className="error-p">
                        An unexpected error occured. Please, try again.
                    </p>
                )}
            </div>
        </main>
    );
};

export default Book;
