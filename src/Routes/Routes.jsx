import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllArtCraftItems from "../Pages/AllArtCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import ArtCraftList from "../Pages/ArtCraftList";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorElement from "../Components/ErrorElement";
import PrivateRutes from "./PrivateRutes";
import CraftItemDetails from "../Components/CraftItemDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/paintings'),
            },
            {
                path: '/Craft/:id',
                element: <PrivateRutes><CraftItemDetails /></PrivateRutes>,
                loader: ({params}) => fetch(`http://localhost:5000/painting/${params.id}`)
            },
            {
                path: '/allArt&craftItems',
                element: <AllArtCraftItems />,
                loader: () => fetch('http://localhost:5000/paintings')
            },
            {
                path: '/addCraftItem',
                element: <PrivateRutes><AddCraftItem /></PrivateRutes>
            },
            {
                path: '/artCraftList',
                element: <PrivateRutes><ArtCraftList /></PrivateRutes>,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);

export default router