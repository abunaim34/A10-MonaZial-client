import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import profile from '../assets/10-profile.jpg';

const Review = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto border-2 rounded-2xl divide-y dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                        <img src={user?.photoURL || "https://source.unsplash.com/100x100/?portrait"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{user?.displayName || "Jihadul Islam"}</h4>
                            <span className="text-xs dark:text-gray-600">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>This painting portrays a bustling art studio, filled with vibrant energy and creativity. In the center of the room, a large canvas stands on an easel, surrounded by a diverse array of artists and enthusiasts. Some are huddled together in animated conversation, while others stand back, studying the artwork with a critical eye.</p>
                    <p>In the background, shelves are filled with sketchbooks, notebooks, and art supplies, symbolizing the tools of the trade. Sunlight streams in through a large window, casting long shadows and infusing the room with warmth and inspiration.</p>
                </div>
            </div>
            <div className="container flex flex-col border-2 rounded-2xl w-full max-w-lg p-6 mx-auto divide-y dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={profile} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Adnan Farabi</h4>
                            <span className="text-xs pl-0 ml-0 gap-0 dark:text-gray-600">5 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">5.6</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>In this drawing, we see a diverse group of people gathered around a table, each one engaged in sharing their thoughts and opinions. Some are holding up sketches or paintings, gesturing animatedly as they discuss their artistic choices. Others are jotting down notes or typing on laptops, capturing the essence of the conversation.</p>
                    <p>This drawing celebrates the power of user reviews to foster dialogue and collaboration within the artistic community, reminding us that every voice has value and contributes to the ongoing evolution of creative expression.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;