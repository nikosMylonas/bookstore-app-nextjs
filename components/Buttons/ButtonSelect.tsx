'use client';

import { addBookToUser } from '@/actions/addBookToUserAction';

const ButtonSelect = ({ bookId }: { bookId: string }) => {
    return (
        <button onClick={() => addBookToUser(bookId)} className="btn-select">
            Select
        </button>
    );
};

export default ButtonSelect;
