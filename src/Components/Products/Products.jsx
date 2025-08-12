import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './Products.css'

const Products = () => {
    return (
        <div className=" mt-[500px]">
            <h1 className="text-5xl font-bold text-center text-black">Explore Cutting-Edge Gadgets</h1>
            <section className="mt-12 flex gap-4">
                <div className="w-1/6">
                    <div class="card bg-base-100 shadow-sm p-5 flex flex-col gap-3">
                        <NavLink to='/'><button className="text-black btn w-full rounded-4xl">All Product</button></NavLink>
                        <NavLink to='/laptops'><button className="text-black btn w-full rounded-4xl">Laptops</button></NavLink>
                        <NavLink to='/phones'><button className="text-black btn w-full rounded-4xl">Phones</button></NavLink>
                        <NavLink to='/accessories'><button className="text-black btn w-full rounded-4xl">Accessories</button></NavLink>
                        <NavLink to='/watches'><button className="text-black btn w-full rounded-4xl">Smart Watches</button></NavLink>
                        <NavLink to='/macs'><button className="text-black btn w-full rounded-4xl">MacBook</button></NavLink>
                        <NavLink to='/iphones'><button className="text-black btn w-full rounded-4xl">Iphone</button></NavLink>
                    </div>
                </div>
                <div className="w-5/6">
                    {
                        <Outlet></Outlet>
                    }
                </div>
            </section>
        </div>
    );
};

export default Products;