import { useLoaderData } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const CraftItemDetails = () => {
    const {user} = useContext(AuthContext)
    const craftDetails = useLoaderData()

    return (
        <div className="pt-10">
            <div  className="card lg:w-[1000px] md:w-[700px] mx-auto bg-base-100 border border-t-0 shadow-xl lg:space-x-14">             
               <div className=" w-full text-center pt-5">
                   <figure><img className="w-[300px] md:w-[650px] lg:w-[850px] md:h-[500px] h-full rounded-3xl" src={craftDetails.image} alt="Album" /></figure>
               </div>
               <div className="card-body">
                   <h2 className="card-title mb-5 font-bold text-xl md:text-3xl">{craftDetails.item_name}</h2>
                   <div className="flex items-center justify-between mb-5 ">
                       <div>
                           <span className="md:font-bold font-medium pr-2 ">SubCategory :</span> <span className="font-semibold">{craftDetails.subcategory_Name}</span>
                       </div>
                       <div className="flex">
                           <span className="font-bold pr-2"><span className="hidden md:block">Rating :</span> </span><span className="font-semibold flex items-center font-sans">{craftDetails.rating}<FaStarHalfAlt /></span>
                       </div>
                   </div>
                   <div className="flex justify-between flex-col md:flex-row">
                       <div className="flex">
                           <span className="md:font-bold font-medium pr-2">Name : </span><span className="font-medium md:font-semibold ">{user?.displayName}</span>
                       </div>
                       <div>
                           <p className="md:font-bold font-medium pr-2">Email : {user?.email}</p>
                       </div>
                   </div>
                   <div className='flex justify-between flex-col md:flex-row border-y-2 py-4'>
                       <div className="flex">
                           <span className="font-bold pr-2">Processing Time : </span><span className="font-semibold">{craftDetails.processing_time}</span>
                           
                       </div>
                       <div className='mt-3 md:mt-0'>
                           <span className="font-bold">Customization:</span><span className="font-semibold">{craftDetails.customization}</span>
                       </div>
                   </div>
                   <div data-aos="fade-right" className="pt-0 border-b-2 pb-3 ">
                       <span className="font-bold">Description : </span><span >{craftDetails.short_description}</span>
                   </div>
                   
                   <div className="flex justify-between mt-6">
                       <div className='flex gap-2'>
                           <span className="md:font-bold font-medium">stockStatus:</span> <span className="font-semibold">{craftDetails.stockStatus}</span>
                       </div>
                       <div>
                           <p className="md:font-bold font-medium pr-2">Price : {craftDetails.price}</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default CraftItemDetails;