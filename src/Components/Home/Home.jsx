
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <section className=" container mx-auto mt-5 pt-10 text-white">
                <div className="bg-violet-500 py-5 rounded-t-4xl">
                    <Header></Header>
                </div>
                {
                    <Outlet></Outlet>
                }
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Home;