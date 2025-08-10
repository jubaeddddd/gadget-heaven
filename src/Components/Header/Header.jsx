import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-5xl font-bold">Gadget Heaven</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-4xl">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ul>
            </div>
            <div className="text-4xl flex gap-3">
                <div className="border-2 border-solid rounded-full p-1">
                    <IoCartOutline />
                </div>
                <div className="border-2 border-solid rounded-full p-1">
                    <CiHeart />
                </div>
            </div>
        </div>
    );
};

export default Header;