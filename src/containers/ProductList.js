import React from "react";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

function ProductList () {
    return (
        <section class="main-container">
            <div class="cards-container">
                <ProductItem />
            </div>
        </section>
    );
}

export { ProductList };