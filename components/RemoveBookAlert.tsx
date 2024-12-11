'use client';

import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { removeBookFromUser } from '@/actions/removeBookFromUserAction';

const RemoveBookAlert = ({
    bookId,
    bookTitle,
}: {
    bookId: string;
    bookTitle: string;
}) => {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you sure you want to remove <em>"{bookTitle}"</em>?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    By pressing Remove you we'll remove this book from your
                    booklist.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={() => removeBookFromUser(bookId)}
                    className="bg-red-600"
                >
                    Remove
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default RemoveBookAlert;
