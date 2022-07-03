import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/MyOrderItem.scss";

import close from "@icons/icon_close.png";

function MyOrderItem ({ product, index }) {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (index) => {
        removeFromCart(index);
    };

    return (
        <div className="shopping-cart">
            <figure>
                <img
                    src={product.images[0]}
                    alt={product.title}
                />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img
                src={close}
                alt="close"
                onClick={() => handleRemove(index)}
            />
        </div>
    );
};

export { MyOrderItem };