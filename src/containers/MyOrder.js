import React, { useContext } from "react";
import { MyOrderItem } from "@components/MyOrderItem";
import { AppContext } from "@context/AppContext";
import "@styles/MyOrder.scss";

import flechita from "@icons/flechita.svg";

function MyOrder () {
    const { state: { cart } } = useContext(AppContext);

    const sumTotal = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    return (
        <aside className="product-detail shopping-cart-detail">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title-shopping-cart">My Order</p>
            </div>
            <div className="my-order-content">        
                {cart.map((product, index) => (
                    <MyOrderItem
                        key={`orderItem-${index}-${product.id}`}
                        product={product}
                        index={index}
                    />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal}</p>
                </div>
                <button className="primary-button">Checkout</button>
            </div>
        </aside>
    );
}

export { MyOrder };