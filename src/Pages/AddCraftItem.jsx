import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Tooltip } from "react-tooltip";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const AddCraftItem = () => {
    const { user } = useContext(AuthContext)

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

        const painting = { item_name, subcategory_Name, price, image, customization, processing_time, stockStatus, rating, short_description, userName, email }
        console.log(painting);


        fetch('https://monazila-server.vercel.app/paintings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(painting)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
                <Slide><h2 className="text-3xl pb-3 font-bold">Add Craft Item</h2></Slide>
                <Fade delay={1000} cascade><p>This is the Add Art & Craft Items page here if you want you can add my categories based on the categories fixed by us as per your choice So lets go and add your Craft Items.</p></Fade>
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
                        <select name="subcategory_Name" className="select select-bordered w-full ">
                            <option disabled selected>Select your Sub-Category</option>
                            <option>Landscape Painting</option>
                            <option>Portrait Drawing</option>
                            <option>Watercolour Painting</option>
                            <option>Oil Painting</option>
                            <option>Charcoal Sketching</option>
                            <option>Cartoon Drawing</option>
                            
                        </select>
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
                        <select name="customization" className="select select-bordered w-full ">
                            <option disabled selected>Select your Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
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
                        <select name="stockStatus" className="select select-bordered w-full ">
                            <option disabled selected>Select your Stock Status</option>
                            <option>In-stock</option>
                            <option>None-stock</option>
                        </select>
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
                            <textarea name="short_description" rows="5" className="border-2 w-full"></textarea>
                        </label>
                    </div>
                </div>
                <Zoom>
                    <input data-tooltip-id="my-tooltip" data-tooltip-content="Please click if you want Add Craft Items on Database" type="submit" value="Add" className="btn btn-block text-white bg-[#9b5273]" />
                </Zoom>
            </form>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default AddCraftItem;