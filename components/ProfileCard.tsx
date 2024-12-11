import { AlertDialog, AlertDialogTrigger } from './ui/alert-dialog';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import UpdateNameForm from './UpdateNameForm';
import UpdatePasswordForm from './UpdatePasswordForm';
import RemoveUserAlert from './RemoveUserAlert';
import { Button } from './ui/button';

const ProfileCard = ({
    user,
}: {
    user: { id: string; name: string; email: string };
}) => {
    return (
        <div className="profile-card-container">
            <p className="text-center mb-2">
                User <span className="font-semibold">{user.email}</span>.
            </p>
            <div className="py-2 flex justify-between border-b border-slate-800">
                <p className="self-center">
                    Name: <span className="font-semibold">{user.name}</span>
                </p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="w-20 md:w-24 place-self-center px-3 py-2 bg-stone-900 text-white rounded-md hover:bg-stone-700 transition-colors duration-300"
                            // disabled
                        >
                            Change
                        </Button>
                    </DialogTrigger>
                    <UpdateNameForm name={user.name} />
                </Dialog>
            </div>
            <div className="py-2 flex justify-between border-b">
                <p className="self-center">
                    Password: <span className="font-semibold">******</span>
                </p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="w-20 md:w-24 place-self-center px-3 py-2 bg-stone-900 text-white rounded-md hover:bg-stone-700 transition-colors duration-300"
                            // disabled
                        >
                            Change
                        </Button>
                    </DialogTrigger>
                    <UpdatePasswordForm />
                </Dialog>
            </div>
            <div className="flex justify-center my-2">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="w-[120px] bg-red-600 hover:bg-red-400 transition-colors duration-300">
                            Delete Account
                        </Button>
                    </AlertDialogTrigger>
                    <RemoveUserAlert userId={user.id} />
                </AlertDialog>
            </div>
        </div>
    );
};

export default ProfileCard;
