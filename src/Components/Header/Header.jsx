import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-20">
            <div>
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-xl">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ul>
            </div>
            <div className="text-xl flex gap-3">
                <div className="border-2 border-solid border-white rounded-full p-1 text-black bg-white">
                    <NavLink><IoCartOutline /></NavLink>
                </div>
                <div className="border-2 border-solid border-white rounded-full p-1 text-black bg-white">
                    <NavLink><CiHeart /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;