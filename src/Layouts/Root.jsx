import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div className="font-serif bg-[#F1EBEE]">
            <div className=" md:mx-4 ">
                <Navber></Navber>
            </div>
            <div className="min-h-[calc(100vh-432px)]">
                <Outlet></Outlet>
            </div  >
            <Footer></Footer>
        </div>
    );
};

export default Root;