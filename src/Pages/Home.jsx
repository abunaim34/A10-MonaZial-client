import { Outlet, useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import CraftItems from "../Components/CraftItems";
// import Painting from "../Components/Painting";


const Home = () => {
    const items = useLoaderData()

    return (
        <div className="lg:mx-10">
            <div>
                <Slider></Slider>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <h1 className="text-3xl underline font-bold">Craft Items Section</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 grid-cols-1 gap-4">
                    {
                        items.map((item, i) => <CraftItems key={i} item={item} />)
                    }
                </div>
            </div>
            <div className="mt-14 text-center">
                <div>
                    <h1 className="text-3xl  font-bold">Our Painting</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse vitae accusamus ducimus minus, vero deleniti laboriosam molestias maiores labore iusto rerum mollitia ab similique.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;