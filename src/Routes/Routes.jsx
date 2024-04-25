import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllArtCraftItems from "../Pages/AllArtCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import ArtCraftList from "../Pages/ArtCraftList";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorElement from "../Components/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allArt&craftItems',
                element: <AllArtCraftItems />
            },
            {
                path: '/addCraftItem',
                element: <AddCraftItem />
            },
            {
                path: '/art&CraftList',
                element: <ArtCraftList />
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