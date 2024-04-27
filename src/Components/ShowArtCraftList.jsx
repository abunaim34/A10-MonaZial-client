import { FaStarHalfAlt } from "react-icons/fa";
import img from "../assets/high-angle-view-human-hand-painting-white-paper-with-colorful-brushstroke_23-2148118022.jpg"
import { Link } from "react-router-dom";


const ShowArtCraftList = () => {
    return (
        <div className="bg-base-100  rounded-xl shadow-xl">
            <figure className="px-4 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="px-4 space-y-2 text-start">
                {/* <div className="flex justify-between items-center gap-3 pt-4">
                    <div className="flex font-sans items-center font-bold">
                        <BiDollarCircle /><span>50TK</span>
                    </div>
                    <div className="flex font-sans flex-row-reverse items-center">
                        <FaStarHalfAlt />
                        <span>5.0</span>
                    </div>
                </div> */}
                <h1 className=" text-xl text-start mt-4">Captivating Charcoal Portrait Drawing</h1>
                <div className="flex justify-between">
                    <h1 className="font-medium text-start"><span className="font-semibold">Customization: </span> yes</h1>
                    <div className="flex font-sans flex-row-reverse items-center gap-1">
                        <FaStarHalfAlt />
                        <span className="font-semibold">5.0</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 pt-4">
                    <div className="flex font-sans gap-1 items-center font-bold">
                        Price: <span>50TK</span>
                    </div>
                    <p className="font-medium"><span className="font-semibold">StockStatus:</span> None-stock</p>
                </div>

            </div>
            <div className="flex p-4 gap-3">
                <Link className=" "> <button className="btn text-white w-[190px] bg-[#9b5273]">Update</button></Link>
                <button className="btn w-[190px] text-white bg-[#9b5273]">Delete</button>
            </div>
        </div>
    );
};

export default ShowArtCraftList;