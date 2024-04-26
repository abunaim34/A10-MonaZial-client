import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    // console.log(user);


    const handleLogout = () => {
        logOut()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>Home</NavLink>
        <NavLink to="/allArt&craftItems" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>All Art & craft Items</NavLink>
        {user && <>
            <NavLink to="/addCraftItem" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>Add Craft Item</NavLink>
            <NavLink to="/art&CraftList" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>My Art&Craft List</NavLink>
        </>}
    </>
    return (
        <div className="navbar pt-5 bg-[#F1EBEE]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] cursor-pointer p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn md:text-3xl flex items-center btn-ghost text-xl"><img className="w-10" src={logo} alt="Monazila" />MonaZila</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal cursor-pointer px-1 gap-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {loading ? <span className="loading loading-infinity loading-sm"></span> : user ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} alt="User Profile" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>{user?.displayName}</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> :
                    <><Link to="/register" className="btn font-bold hidden md:block pt-4 text-white bg-[#9b5273]">Register</Link>
                        <Link to="/login" className="btn font-bold text-white bg-[#9b5273]">Login</Link></>}
            </div>
        </div>
    );
};

export default Navber;