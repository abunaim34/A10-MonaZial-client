import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div className="font-serif dark:bg-[#F1EBEE]">
            <div className="w-full fixed top-0 z-10">
                <Navber></Navber>
            </div>
            <div className="lg:px-10 min-h-[calc(100vh-350px)] pt-20">
                <Outlet></Outlet>
            </div  >
            <Footer></Footer>
        </div>
    );
};

export default Root;