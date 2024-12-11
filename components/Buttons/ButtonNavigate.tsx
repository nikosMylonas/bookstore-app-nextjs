import Link from 'next/link';

const ButtonNavigate = ({ title, url }: { title: string; url: string }) => {
    return (
        <div className="flex justify-center mt-4">
            <button className="btn-select w-[120px]">
                <Link href={url}>{title}</Link>
            </button>
        </div>
    );
};

export default ButtonNavigate;
