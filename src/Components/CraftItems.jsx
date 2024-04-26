import img from "../assets/high-angle-view-human-hand-painting-white-paper-with-colorful-brushstroke_23-2148118022.jpg"
import { BiDollarCircle } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const CraftItems = ({ item }) => {
    const {id, item_name, subcategory_Name, short_description, price, rating, stockStatus } = item || {}
    return (
        <div className=" relative bg-base-100 h-[465px] md:h-[500px] lg:h-[470px] rounded-xl shadow-xl">
            <figure className="px-4 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="bg-[#9b5273] right-4 top-5 rounded-sm absolute">
                <p className="text-white p-1">{stockStatus}</p>
            </div>
            <div className="px-4 space-y-2 text-start">
                <div className="flex justify-between items-center gap-3 pt-4">
                    <div className="flex font-sans items-center font-bold">
                        <BiDollarCircle /><span>{price}TK</span>
                    </div>
                    <div className="flex font-sans flex-row-reverse items-center">
                        <FaStarHalfAlt />
                        <span>{rating}</span>
                    </div>
                </div>
                <h1 className=" text-xl text-start">{item_name}</h1>
                <h1 className="font-medium text-start">{subcategory_Name}</h1>
                <p className="text-[#12132D99] font-sans">{short_description.slice(0,56)}</p>
                <Link to={`/craftItems/${id}`} className="flex items-center gap-4 py-3 text-center">
                    <button className="btn bg-[#9b5273] w-[290px] lg:w-[260px] md:w-[340px]">View Details page</button>
                </Link>
            </div>
        </div>
    );
};

CraftItems.propTypes = {
    item: PropTypes.object
}

export default CraftItems;