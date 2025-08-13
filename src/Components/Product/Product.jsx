import { FaProductHunt } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_title ,price,product_image ,product_id} = product
    return (
        <div>
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure class="px-10 pt-10 h-[300px]">
                    <img
                        src={product_image}
                        class="rounded-xl h-full w-full object-cover" />
                </figure>
                <div class="card-body text-black pl-10">
                    <h2 class="card-title text-2xl">{product_title}</h2>
                    <p className="text-gray-500 text-xl">Price: {price}</p>
                    <div class="card-actions">
                        <Link to={`/details/${product_id}`}><button class="btn btn-outline btn-primary py-3 px-4 rounded-3xl">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;