import React from "react";
import "@styles/OrdersItem.scss";

import flechita from "@icons/flechita.svg";

function OrdersItem () {
    return (
        <div className="orders">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
        </div>
    );
}

export { OrdersItem };