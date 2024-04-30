import { Link} from "react-router-dom";
import {  useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip';
import { Bounce, JackInTheBox } from "react-awesome-reveal";
import { useContext } from "react";
import {GridLoader} from "react-spinners"



const ArtCraftList = () => {
    const [items, setItems] = useState([])
    const [displayItems, setDisplayItems] = useState([])
    const [loader, setLoader] = useState(false)
    const { user} = useContext(AuthContext)

    const handleFilter = filter => {
        if(filter == "All"){
            setDisplayItems(items)
        }
        else if(filter == "Yes"){
            const fill = items.filter(i => i.customization == "Yes")
            console.log(fill);
            setDisplayItems(fill)
        }
        else if(filter == "No"){
            const filt = items.filter(i => i.customization == "No")
            console.log(filt);
            setDisplayItems(filt)
        }

    }
    useEffect(() => {
        setLoader(true)
        fetch(`https://monazila-server.vercel.app/paintings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setLoader(false)
                setItems(data)
                setDisplayItems(data)
            })
    }, [user])


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://monazila-server.vercel.app/painting/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            const remaining = displayItems.filter(item => item._id !== _id)
                            setDisplayItems(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="pt-12 lg:px-10">
            <Bounce duration={2000}>
                <div className="text-center">
                    <select name="Customization" onChange={(e) => handleFilter(e.target.value)} data-tooltip-id="my-tooltip" data-tooltip-content="If you want to Customization.. Please click Yes or No" className="select select-secondary ">
                        <option disabled selected>Customization</option>
                        <option>All</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </Bounce>
            <div className="grid grid-cols-1 mt-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {loader ? <GridLoader color="#36d7b7" />: displayItems.map((item, i) => <div key={i} className="bg-base-100  rounded-xl shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={item.image} alt="Shoes" className="rounded-xl w-[288px] md:w-full h-[235px]" />
                    </figure>
                    <div className="px-4 space-y-2 text-start">
                        <h1 data-tooltip-id="my-tooltip" data-tooltip-content={`Item-Name : ${item.item_name}`} className=" text-xl text-start mt-4">{item.item_name}</h1>
                        <div className="flex justify-between">
                            <h1 className="font-medium text-start"><span className="font-semibold">Customization: </span> {item.customization}</h1>
                            <div className="flex font-sans flex-row-reverse items-center gap-1">
                                <FaStarHalfAlt />
                                <span className="font-semibold">{item.rating}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-3 pt-4">
                            <div className="flex font-sans gap-1 items-center font-bold">
                                Price: <span>{item.price}TK</span>
                            </div>
                            <p className="font-medium"><span className="font-semibold">StockStatus:</span> {item.stockStatus}</p>
                        </div>
                    </div>
                    <div className="flex p-4 gap-3">
                        <JackInTheBox><Link to={`/artCraftList/${item._id}`} data-tooltip-id="my-tooltip" data-tooltip-content="Please click if you want to Update your Craft Item"> <button className="btn text-white lg:w-[170px] md:w-[160px] w-[140px] bg-[#9b5273]">Update</button></Link></JackInTheBox>
                        <JackInTheBox><button data-tooltip-id="my-tooltip" data-tooltip-content="If you want to DELETE your Craft Item UI/Databse. Please Click me." onClick={() => handleDelete(item._id)} className="btn lg:w-[170px] text-white bg-[#9b5273] md:w-[160px] w-[140px]">Delete</button></JackInTheBox>
                    </div>
                </div>)}
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default ArtCraftList;