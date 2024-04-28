// import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ShowArtCraftList from "../Components/ShowArtCraftList";
import { AuthContext } from "../Provider/AuthProvider";



const ArtCraftList = () => {
    const [items, setItems] = useState()
    const {user, } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/paintings/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(data);
        })
    }, [user])
    return (
        <div className="pt-12 lg:px-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold">My Art&Craft List</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur id magni beatae totam error rem nesciunt quasi architecto iste debitis.</p>
            </div>
            <div className="grid grid-cols-1 mt-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => <ShowArtCraftList key={i} item={item}></ShowArtCraftList>)}
            </div>
        </div>
    );
};

export default ArtCraftList;