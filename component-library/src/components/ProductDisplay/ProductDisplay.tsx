import type { ProductDisplayProps } from "../../types/index.ts";


// Function for product display jsx
export function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children }: ProductDisplayProps) {

    return (
        <div className="product-display">
            <div>
                <img className="product-image" src={product.imageUrl}></img>
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                { (showDescription) ? <p>{product.description}</p> : null }
                { (showStockStatus) ? <p>In Stock</p> : <p>Out of Stock</p>}            
                {onAddToCart && (<button onClick={() => onAddToCart(product.name)} className="alert-button" id={`${product.id}`}>Add To Cart</button>)}
            </div>
            {children}
        </div>

    )
}
