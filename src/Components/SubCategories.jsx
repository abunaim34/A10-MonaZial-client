import { useState } from "react";
import { useEffect } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useParams, Link } from "react-router-dom"
import { GridLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";

const SubCategories = () => {
    const { subcategory } = useParams()
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch(`https://monazila-server.vercel.app/paint/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setItems(data)
            })
    }, [subcategory])
    return (
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            { loader ? <GridLoader color="#36d7b7" /> :
                items.map(item => <div key={item._id} className="card relative bg-base-100  rounded-xl shadow-xl">
                    <figure className="px-4 pt-5">
                        <img src={item.image} alt="Shoes" className="rounded-xl h-[235px] w-[300px]" />
                    </figure>
                    <div className="px-4 ml-4 mt-3 space-y-2 text-start">
                        <h1 className=" text-2xl font-bold text-start">{item.item_name}</h1>
                        <div className=" space-y-2 flex items-center justify-between">
                            <h1 className="font-semibold text-start">{item.subcategory_Name}</h1>
                            <div className="flex font-sans flex-row-reverse items-center">
                                <FaStarHalfAlt />
                                <span>{item.rating}</span>
                            </div>
                        </div>
                        <p className="h-[40px]">{item.short_description}</p>
                        <div className="flex justify-between items-center gap-3 pt-4">
                            <div className="flex font-sans items-center font-bold">
                                Price:<span className="pl-1">{item.price}TK</span>
                            </div>
                            <div className="flex font-sans items-center font-bold">
                                Time:<span className="pl-1">{item.processing_time}</span>
                            </div>
                        </div>
                    </div>
                    <Link data-tooltip-id="my-tooltip" data-tooltip-content="Please click if you want to see our View Details" to={`/craftItems/${item._id}`} className="p-4"><button className="btn bg-[#9b5273] text-white w-full">View Details page</button></Link>
                    <Tooltip id="my-tooltip" />
                </div>)
            }
        </div>
    );
};

export default SubCategories;