import React from "react";
import { MyOrderItem } from "@components/MyOrderItem";
import "@styles/MyOrder.scss";

import flechita from "@icons/flechita.svg";

function MyOrder () {
    return (
        <aside className="product-detail shopping-cart-detail">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title-shopping-cart">My Order</p>
            </div>
            <div className="my-order-content">        
                <MyOrderItem />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">Checkout</button>
            </div>
        </aside>
    );
}

export { MyOrder };