const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container-padding py-6">
                &copy; {year} MyBooks - All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
