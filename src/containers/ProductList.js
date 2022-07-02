import React from "react";
import { ProductItem } from "@components/ProductItem";
import { useGetProducts } from "@hooks/useGetProducts";
import "@styles/ProductList.scss";

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList () {
    const { products } = useGetProducts(API);

    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
}

export { ProductList };