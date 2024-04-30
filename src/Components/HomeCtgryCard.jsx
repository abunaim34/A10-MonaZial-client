import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const HomeCtgryCard = ({item}) => {
    const {image, subcategory_Name, short_description, price, rating} = item || {}

    return (
        <Link to={`/allSubCategories/${subcategory_Name}`} data-tooltip-id="my-tooltip" data-tooltip-content={`SubCategory: ${subcategory_Name}. Please click me.`} className="card bg-base-100 border-t pt-7 rounded-xl shadow-xl">
            <figure className="px-4 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl h-[235px] w-[300px]" />
            </figure>
            <div className="card-body px-4 space-y-2 text-start">
                <h1 className=" text-3xl text-start">{subcategory_Name}</h1>
                <p className="">{short_description}</p>
                <div className="divider"></div>
                <div className="flex justify-between">
                    <p className="font-semibold">Price: <span className="font-sans font-bold">{price}</span></p>
                    <p className="text-end font-semibold pr-2">Rating: <span className="font-sans font-bold">{rating}</span></p>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </Link>
    );
};

HomeCtgryCard.propTypes = {
    item: PropTypes.object
}

export default HomeCtgryCard;