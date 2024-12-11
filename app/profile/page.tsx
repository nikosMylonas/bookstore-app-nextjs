import { Metadata } from 'next';
import { attributes } from '@/config/attributes';
import { getUser } from '@/data-layer/getUser';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';
import ProfileCard from '@/components/ProfileCard';

export const metadata: Metadata = {
    title: attributes.profile.title,
    description: attributes.profile.description,
    icons: {
        icon: './favicon.ico',
    },
};

const Profile = async () => {
    const user = await getUser();

    return (
        <main>
            <div className="container-p mt-6">
                <h1>Profile</h1>
                {user !== null ? (
                    <ProfileCard user={user} />
                ) : (
                    <p className="error-p">User Not Found</p>
                )}
                <div className="mt-4">
                    <p className="text-center">Return to your booklist.</p>
                    <ButtonNavigate title="Return" url="/books" />
                </div>
            </div>
        </main>
    );
};

export default Profile;
