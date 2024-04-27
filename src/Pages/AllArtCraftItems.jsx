import { useLoaderData } from "react-router-dom";


const AllArtCraftItems = () => {
    const AllItems = useLoaderData()

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
                        {
                            AllItems.map((item, index) => <tr key={index} className="hover">
                            <th>{index + 1}</th>
                            <td>{item.item_name}</td>
                            <td>{item.subcategory_Name}</td>
                            <td className="font-sans">{item.price}</td>
                            <td>{item.stockStatus}</td>
                            <td><button className="btn rounded-3xl text-white bg-[#9b5273]">View Details</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItems;