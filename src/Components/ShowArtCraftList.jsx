import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


const ShowArtCraftList = ({item}) => {
    const {image, item_name, customization, price, rating, stockStatus} = item || {}
    return (
        <div className="bg-base-100  rounded-xl shadow-xl">
            <figure className="px-6 pt-6">
                <img src={image} alt="Shoes" className="rounded-xl w-[288px] md:w-full h-[235px]" />
            </figure>
            <div className="px-4 space-y-2 text-start">
                <h1 className=" text-xl text-start mt-4">{item_name}</h1>
                <div className="flex justify-between">
                    <h1 className="font-medium text-start"><span className="font-semibold">Customization: </span> {customization}</h1>
                    <div className="flex font-sans flex-row-reverse items-center gap-1">
                        <FaStarHalfAlt />
                        <span className="font-semibold">{rating}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 pt-4">
                    <div className="flex font-sans gap-1 items-center font-bold">
                        Price: <span>{price}TK</span>
                    </div>
                    <p className="font-medium"><span className="font-semibold">StockStatus:</span> {stockStatus}</p>
                </div>
            </div>
            <div className="flex p-4 gap-3">
                <Link className=" "> <button className="btn text-white lg:w-[170px] md:w-[160px] w-[140px] bg-[#9b5273]">Update</button></Link>
                <button className="btn lg:w-[170px] text-white bg-[#9b5273] md:w-[160px] w-[140px]">Delete</button>
            </div>
        </div>
    );
};

ShowArtCraftList.propTypes = {
    item: PropTypes.object
}

export default ShowArtCraftList;