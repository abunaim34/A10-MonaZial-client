import { Outlet, useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import CraftItems from "../Components/CraftItems";
import { Tooltip } from "react-tooltip";
import { Zoom } from "react-awesome-reveal";


const Home = () => {
    const items = useLoaderData()

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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 grid-cols-1 gap-4">
                    {
                        items.slice(0, 6).map((item, i) => <CraftItems key={i} item={item} />)
                    }
                </div>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <h1 data-tooltip-id="my-tooltip" data-tooltip-content="This is Our Painting section" className="text-3xl  font-bold">Our Painting</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse vitae accusamus ducimus minus, vero deleniti laboriosam molestias maiores labore iusto rerum mollitia ab similique.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 ">
                    <Outlet></Outlet>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Home;