import bannerImg from '../../assets/banner.jpg'
import { Outlet } from "react-router-dom";

const Banner = () => {
    return (
        <div className='relative container mx-auto'>
            <div className="flex flex-col items-center gap-10  text-center pt-5 pb-72 bg-violet-500 rounded-b-4xl">
                <div>
                    <h1 className="text-7xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                </div>
                <div>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div>
                    <button className='btn text-violet-500 p-6 text-xl rounded-2xl'>Shop Now</button>
                </div>
            </div>
            <div class="bg-white p-4 rounded-2xl absolute left-80 top-96">
                <div class="bg-white p-2 rounded-2xl">
                    <img src={bannerImg} alt="VR headset" class="rounded-2xl className='h-[500px] w-[900px] " />
                </div>
            </div>

            {
                <Outlet></Outlet>
            }

        </div>
    );
};

export default Banner;