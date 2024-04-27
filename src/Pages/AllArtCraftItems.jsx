

const AllArtCraftItems = () => {
    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#28282808] mt-4'>
                        <tr >
                            <td>1</td>
                            <td>name</td>
                            <td> minutes</td>
                            <td> calories</td>
                            <td><button className='btn rounded-full bg-[#9b5273] text-white'>View Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItems;