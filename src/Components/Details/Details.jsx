import { useLoaderData, useParams } from "react-router-dom";
import DetailsChild from "../DetailsChild/DetailsChild";

const Details = () => {

    const { product_id } = useParams()

    const products=useLoaderData()

    return (
        <div>
            <div className="flex flex-col items-center gap-10  text-center pt-5 pb-72 bg-violet-500 w-full mb-96">
                <div>
                    <h1 className="text-5xl font-bold">Product Details</h1>
                </div>
                <div>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className="absolute top-96">
                    {
                        products.map(product => {
                            if(product_id === product.product_id){
                               return <DetailsChild product={product}></DetailsChild>
                            }
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Details;