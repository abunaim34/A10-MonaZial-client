import { useEffect } from "react";
import { FaRegEye, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { GiEternalLove } from "react-icons/gi";



const Painting = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/Painting.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <>
            {
                items.map(item => <div key={item.id}
                    // const {title, img, price, description, stockStatus, view, love, rating} item
                 className="flex items-start  border rounded-2xl">
                    <div className="flex flex-col md:flex-row">
                        <img className="p-4 w-full md:w-[212px] h-[210px] rounded-3xl" src={item.img} alt=""></img>
                        <div className="md:mt-5 px-3 pb-2">
                            <div className="flex items-center justify-around md:space-x-4 md:justify-start mb-3">
                                <div className="flex items-center gap-1">
                                <FaStarHalfAlt /><span className="font-sans font-medium">{item.rating}</span>
                                </div>
                                <div className="flex items-center gap-1 font-medium">
                                    <FaRegEye /><span className="font-sans">{item.view}</span>
                                </div>
                                <div className="flex items-center gap-1 font-medium">
                                <GiEternalLove /><span className="font-sans">{item.love}</span>
                                </div>
                            </div>
                            <div className="space-y-2 text-center md:text-start">
                                <h3 className="text-xl md:text-start font-extrabold">{item.title}</h3>
                                <p className="">{item.description} </p>
                                <div className="flex items-center mt-6 ">
                                    <h4 className="font-extrabold pr-5">Price: <span className="font-sans">{item.price}</span></h4>
                                    <p className="font-semibold">StockStatus: {item.stockStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default Painting;