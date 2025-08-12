import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Watches = () => {
    const products = useLoaderData()
    
        return (
            <div>
                <div className="grid grid-cols-3">
                    {
                        products.map(product => {
                            if (product.product_type_id === 'T_SMARTWATCH') {
                                return <Product product={product}></Product>
                            }
                        })
                    }
                </div>
            </div>
        );
};

export default Watches;