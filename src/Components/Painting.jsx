import img from "../assets/high-angle-view-human-hand-painting-white-paper-with-colorful-brushstroke_23-2148118022.jpg"
import { FaRegEye } from "react-icons/fa";


const Painting = () => {
    return (
        <div className="flex items-start  border-[1px] rounded-2xl">
            <div className="flex flex-col lg:flex-row">
                <img className="p-4 w-[212px] h-[204px] rounded-3xl" src={img} alt=""></img>
                <div className="mt-5 px-3 pb-2">
                    <div className="flex items-center space-x-4 mb-3 text-text-color">
                        <div className="flex items-center gap-2">
                            <FaRegEye /><span className="font-sans">50.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegEye /><span className="font-sans">50.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegEye /><span className="font-sans">50.</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-start font-extrabold">Cap For Hockeys</h3>
                        <p className="">Our products are exceptional and long lasting </p>
                        <div className="flex items-center mt-6 ">
                            <h4 className="font-extrabold pr-5 text-primary-color">Price - $22.00</h4>
                            <i className="fa-solid fa-cart-shopping pr-1 text-text-color"></i>Delivery Fee : Free
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Painting;