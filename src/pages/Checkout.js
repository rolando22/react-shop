import React from "react";
import { OrderItem } from "@components/OrderItem";
import "@styles/Checkout.scss";

function Checkout () {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title-my-order">My order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>04.25.2021</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <OrderItem />
                </div>
            </div>
        </div>
    );
}

export { Checkout };