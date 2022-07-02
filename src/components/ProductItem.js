import React from "react";
import "@styles/ProductItem.scss";

import btAddToCart from "@icons/bt_add_to_cart.svg";

function ProductItem ({ product: { title, price, images } }) {
    return (
        <div className="product-card">
            <img
                src={images[0]}
                alt={title}
            />
            <div className="product-info">
                <div>
                    <p>${price}</p>
                    <p>{title}</p>
                </div>
                <figure>
                    <img src={btAddToCart} alt="" />
                </figure>
            </div>
        </div>
    );
}

export { ProductItem };