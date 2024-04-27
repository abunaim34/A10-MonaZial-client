import ShowArtCraftList from "../Components/ShowArtCraftList";



const ArtCraftList = () => {
    return (
        <div className="pt-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold">My Art&Craft List</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur id magni beatae totam error rem nesciunt quasi architecto iste debitis.</p>
            </div>
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <ShowArtCraftList></ShowArtCraftList>
            </div>
        </div>
    );
};

export default ArtCraftList;