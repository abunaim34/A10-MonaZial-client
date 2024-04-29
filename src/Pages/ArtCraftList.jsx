import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip';
import { Bounce, JackInTheBox } from "react-awesome-reveal";



const ArtCraftList = () => {
    const [items, setItems] = useState([])
    // const [displayData, setDisplayData] = useState([])
    const { user, } = useContext(AuthContext)

    // console.log(displayData);

    // const handleItemFilter = filter => {
    //     if(filter === 'Yes'){
    //         const yes = items.filter(job => job.customization === 'Yes')
    //         setDisplayData(yes)
    //     }
    //     else if(filter === 'No'){
    //         const no = items.filter(i => i.customization === 'No')
    //         setDisplayData(no)
    //     }
    // }

    useEffect(() => {
        fetch(`http://localhost:5000/paintings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItems(data)
                //     if(data.length > 0){
                //         const itemCard = []
                //         for(const id of items){
                //             const item = data.find(i => i.id === id)
                //             if (item) {
                //                 itemCard.push(item)
                //             }
                //         }
                //         setItems(itemCard)
                //         setDisplayData(itemCard)
                //     }
            })
    }, [user, items])


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
                fetch(`http://localhost:5000/painting/${_id}`, {
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
                        }
                    })
            }
        });
    }
    return (
        <div className="pt-12 lg:px-10">
            <Bounce duration={2000}>
                <div className="text-center">
                    <select data-tooltip-id="my-tooltip" data-tooltip-content="If you want to Customization.. Please click Yes or No" className="select select-secondary ">
                        <option disabled selected>Customization</option>
                        <option >Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </Bounce>
            <div className="grid grid-cols-1 mt-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => <div key={i} className="bg-base-100  rounded-xl shadow-xl">
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