import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer mt-10 bottom-0 footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="border-b-2 pb-10">
                <div>
                    <h1 className=" text-2xl md:text-4xl font-black bg-gradient-to-r from-[#1DD100] via-black to-primary text-transparent bg-clip-text bg-300% animate-gradient">Monazila</h1>
                    <p className="tex-[#12132D99] pt-5 mx-auto md:w-[690px]"> Contact our Google, Github, Faceook or instagram to collect any kind of information.</p>
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4 mt-4">
                        <a href="https://www.google.com/"><FaGoogle className="text-2xl text-black" /></a>
                        <a href="https://github.com/"><FaGithub className="text-2xl text-black" /></a>
                        <a href="https://facebook.com/"><FaFacebook className="text-2xl text-black" /></a>
                        <a href="https://instagram.com/"><FaInstagram className="text-2xl text-black" /></a>
                    </div>
                </nav>
            </div>
            <aside>
                <p>2024, All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;