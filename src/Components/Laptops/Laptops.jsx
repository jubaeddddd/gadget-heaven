import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Laptops = () => {


    const products = useLoaderData()

    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    products.map(product => {
                        if (product.product_type_id === 'T_LAPTOP') {
                            return <Product product={product}></Product>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Laptops;