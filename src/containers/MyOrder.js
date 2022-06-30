import React from "react";
import { MyOrderItem } from "../components/MyOrderItem";
import "../styles/MyOrder.scss";

function MyOrder () {
    return (
        <aside className="product-detail shopping-cart-detail">
            <div className="title-container">
                <img src="./icons/Platzi_YardSale_Icons/flechita.svg" alt="arrow" />
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