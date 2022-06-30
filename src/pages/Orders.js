import React from "react";
import { OrdersItem } from "../components/OrdersItem";
import "../styles/Orders.scss";

function Orders () {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title-my-order">My orders</h1>
                <div className="my-order-content">
                    <OrdersItem />
                </div>
            </div>
        </div>
    );
};

export { Orders };