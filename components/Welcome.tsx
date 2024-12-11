const Welcome = ({ name }: { name: string }) => {
    return (
        <div className="welcome">
            <div className="container-p">
                <p>Welcome {name}!</p>
            </div>
        </div>
    );
};

export default Welcome;
