import React from "react";
import "../styles/OrdersItem.scss";

function OrdersItem () {
    return (
        <div className="orders">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src="./icons/Platzi_YardSale_Icons/flechita.svg" alt="arrow" />
        </div>
    );
}

export { OrdersItem };