// import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import CraftItems from "../Components/CraftItems";
import { Tooltip } from "react-tooltip";
import { Zoom } from "react-awesome-reveal";
import Review from "../Components/Review";
import Painting from "../Components/Painting";
import { useEffect } from "react";
import { useState } from "react";
import {GridLoader} from "react-spinners"
import HomeCtgryCard from "../Components/HomeCtgryCard";



const Home = () => {
    const [items, setItems] = useState([])
    const [category, setCategory] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch('https://monazila-server.vercel.app/paintings')
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setItems(data)
            })
    }, [])

    useEffect(() => {
        setLoader(true)
        fetch('https://monazila-server.vercel.app/subCategory')
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setCategory(data)
            })
    }, [])
    return (
        <div className="lg:mx-10">
            <div>
                <Slider></Slider>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <Zoom>
                        <h1 data-tooltip-id="my-tooltip" data-tooltip-content="This is Craft Items section" className="text-3xl underline font-bold">Craft Items Section</h1>
                    </Zoom>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 grid-cols-1 gap-4 ">
                    {
                      loader ? <GridLoader color="#36d7b7" /> :  items.slice(0, 6).map((item, i) => <CraftItems key={i} item={item} />)
                    }
                </div>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <Zoom>
                        <h1 data-tooltip-id="my-tooltip" data-tooltip-content="Art & Craft Categories Section" className="text-3xl underline font-bold">Art & Craft Categories Section</h1>
                    </Zoom>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 grid-cols-1 gap-4">
                    {
                     loader ? <GridLoader color="#36d7b7" /> : category.map((item, i) => <HomeCtgryCard key={i} item={item} />)
                    }
                </div>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <h1 data-tooltip-id="my-tooltip" data-tooltip-content="This is Our Painting section" className="text-3xl pb-3 font-bold">Our Painting</h1>
                    <p className="lg:px-28">Here are the different types of Paint and Art in our Painting and Drawing category, you can see that our items are affordable and beautiful to look at.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2 ">
                    <Painting></Painting>
                </div>
            </div>
            <div className="mt-14 text-center border-2 rounded-2xl pt-10 md:pt-10 md:pb-10">
                <div>
                    <Zoom>
                        <h1 data-tooltip-id="my-tooltip" data-tooltip-content="This is Users Feedback" className="text-3xl pb-3 font-bold">Users Feedback</h1>
                    </Zoom>
                    <p className="lg:px-16">This is our users feedback box. If you want, you can give us feedback on any matter. We are engaged in serving you. Please let us hear your important comments by giving us feedback, thank you.</p>
                </div>
                <div className="mt-8">
                    <Review></Review>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Home;