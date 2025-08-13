
import { IoCartOutline } from "react-icons/io5";

const DetailsChild = ({ product }) => {
    const { product_title, product_image, price, description, specification, availability, rating } = product
    return (
        <div>
            <div class="bg-base-200 p-6 rounded-4xl">
                <div class="flex flex-col lg:flex-row gap-6">
                    <div>
                        <img
                            src={product_image}
                            class="max-w-sm rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="text-black flex flex-col gap-5">
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <h1 className="text-2xl font-bold text-gray-600">Price: ${price}</h1>
                        <div>
                            {
                                availability === true ? <button class="btn btn-outline btn-accent">In Stock</button> : <button class="btn btn-soft btn-error">Stock out</button>
                            }
                        </div>
                        <p className="text-sm font-bold text-gray-500">{description}</p>
                        <h1 className="text-xl font-bold text-black">Specification:</h1>
                        <p className="text-sm font-bold text-gray-500">{specification}</p>
                        <p><span className="text-black font-bold">Rating:</span> {rating}</p>
                        <div>
                            <button class="btn btn-active btn-primary">Add to Cart <IoCartOutline /></button>
                            <button class="btn btn-circle ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsChild;