import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/ProductItem.scss";

import btAddToCart from "@icons/bt_add_to_cart.svg";

function ProductItem ({ product }) {
    const { addToCart } = useContext(AppContext);

    return (
        <div className="product-card">
            <img
                src={product.images[0]}
                alt={product.title}
            />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => addToCart(product)}>
                    <img src={btAddToCart} alt="" />
                </figure>
            </div>
        </div>
    );
}

export { ProductItem };