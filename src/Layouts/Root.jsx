import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div className="font-serif">
            <div className="lg:mx-16 md:mx-10 ">
                <Navber></Navber>
            </div>
            <div className="min-h-[calc(100vh-450px)]">
                <Outlet></Outlet>
            </div  >
            <Footer></Footer>
        </div>
    );
};

export default Root;