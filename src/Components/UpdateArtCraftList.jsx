import { Bounce } from "react-awesome-reveal";
import {useLoaderData} from "react-router-dom"
import Swal from 'sweetalert2'


const UpdateArtCraftList = () => {
    // const {user} = useContext(AuthContext)
    const items = useLoaderData()
    const {_id, item_name, subcategory_Name, price, image, customization,processing_time, stockStatus, rating, short_description} = items || {}

    const handleUpdateItem = e => {
        e.preventDefault()
        const form = e.target
        const item_name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        const price = form.price.value 
        const image = form.image.value
        const customization = form.customization.value
        const processing_time = form.processing_time.value 
        const stockStatus = form.stockStatus.value
        const rating = form.rating.value
        const short_description = form.short_description.value

        const updatePainting = {item_name, subcategory_Name, price, image, customization,processing_time, stockStatus, rating, short_description}
        console.log(updatePainting);

        fetch(`http://localhost:5000/painting/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatePainting)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Craft Item update successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                form.reset()
            }
        })
    }

    return (
        // <div className=" lg:px-24 py-12">
        //     <div className="text-center mb-8 md:px-4">
        //         <h2 className="text-3xl pb-3 font-bold">Update Craft Item</h2>
        //         <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        //     </div>
        //     <form onSubmit={handleUpdateItem} className="p-4">
        //         <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
        //             <div className="form-control md:w-1/2">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Name</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="name" defaultValue={item_name} placeholder="Name" className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //             <div className="form-control md:w-1/2 lg:ml-4">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Price</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered font-sans w-full" />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
        //             <div className="form-control md:w-1/2">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Sub-Category</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="SubCategory" defaultValue={subcategory_Name} placeholder="Sub-category" className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //             <div className="form-control md:w-1/2 lg:ml-4">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Image URL</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="image" placeholder="Image URL" defaultValue={image} className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
        //             <div className="form-control md:w-1/2">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Customization</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="customization" defaultValue={customization} placeholder="Customization" className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //             <div className="form-control md:w-1/2 lg:ml-4">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Processing Time</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Processing Time" className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="md:flex md:gap-2 lg:gap-0 gap-2 md:mb-8">
        //             <div className="form-control md:w-1/2">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Stock Status</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="Stock Status" className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //             <div className="form-control md:w-1/2 lg:ml-4">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Rating</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <input type="number" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full" />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="mb-8">
        //             <div className="form-control w-full">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Description</span>
        //                 </label>
        //                 <label className="input-group">
        //                     <textarea name="description" defaultValue={short_description} rows="5" className="border-2 w-full p-2"></textarea>
        //                 </label>
        //             </div>
        //         </div>
        //         <input type="submit" value="Add" className="btn btn-block text-white bg-[#9b5273] rounded-3xl" />

        //     </form>
        // </div>
        <div className=" lg:px-24 py-12">
            <div className="text-center mb-8 md:px-4">
                <h2 className="text-3xl pb-3 font-bold">Add Craft Item</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateItem} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" defaultValue={item_name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered font-sans w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" defaultValue={subcategory_Name} placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" defaultValue={customization} placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 gap-2 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="Stock Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" /> */}
                            <textarea name="short_description" defaultValue={short_description} rows="5" className="border-2 w-full"></textarea>
                        </label>
                    </div>
                </div>
                <Bounce duration={2000}><input data-tooltip-id="my-tooltip" data-tooltip-content="Please click me, or Update your Items" type="submit" value="UPDATE" className="btn btn-block text-white bg-[#9b5273]" /></Bounce>

            </form>
        </div>
    );
};

export default UpdateArtCraftList;