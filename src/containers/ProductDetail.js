import React from "react";
import { ProductInfo } from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

function ProductDetail () {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src="./icons/Platzi_YardSale_Icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo />
        </aside>
    );
};

export { ProductDetail };