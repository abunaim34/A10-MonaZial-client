import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'


const AddCraftItem = () => {
    const {user} = useContext(AuthContext)

    const handleAddItems = e => {
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
        const userName = user?.displayName
        const email = user?.email

        const painting = {item_name, subcategory_Name, price, image, customization,processing_time, stockStatus, rating, short_description, userName, email}
        console.log(painting);


        fetch('http://localhost:5000/paintings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(painting)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Craft Item added successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })

                form.reset()
            }
        })
    }
    return (
        <div className=" lg:px-24 py-12">
            <div className="text-center mb-8 md:px-4">
                <h2 className="text-3xl pb-3 font-bold">Add Craft Item</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddItems} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered font-sans w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user?.displayName} name="name" placeholder="User Name" disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={user?.email} name="email" placeholder="Email" disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 gap-2 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                            <textarea name="short_description" rows="5" className="border-2 w-full"></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add" className="btn btn-block text-white bg-[#9b5273]" />

            </form>
        </div>
    );
};

export default AddCraftItem;