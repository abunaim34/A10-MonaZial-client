import { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { GridLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";


const AllArtCraftItems = () => {
    const [AllItems, setAllItems] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch('https://monazila-server.vercel.app/paintings')
        .then(res => res.json())
        .then(data => {
            setAllItems(data) 
            setLoader(false)
        })
    }, [])

    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Items-Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { loader ? <GridLoader color="#36d7b7" /> :
                            AllItems.map((item, index) => <tr key={index} className="hover">
                            <th>{index + 1}</th>
                            <td>{item.item_name}</td>
                            <td>{item.subcategory_Name}</td>
                            <td className="font-sans">{item.price}</td>
                            <td>{item.stockStatus}</td>
                            <td data-tooltip-id="my-tooltip" data-tooltip-content="Please click if you want to see our View Details"><Link to={`/craftItems/${item._id}`}><button className="btn rounded-3xl text-white bg-[#9b5273]">View Details</button></Link></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default AllArtCraftItems;