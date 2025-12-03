import type { Product } from "../../types";

export function Product({id, name, price, description, imageUrl, inStock }: Product) {


    return (
        <div className="product-display">
            <div>
                <img>{imageUrl}</img>
                <h1>{name}</h1>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <button id={id}>Add To Cart</button>
            </div>
        </div>
    );
}