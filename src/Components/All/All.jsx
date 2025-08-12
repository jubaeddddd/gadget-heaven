import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const All = () => {

    const products=useLoaderData();

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default All;