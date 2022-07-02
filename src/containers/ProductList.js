import React, { useEffect, useState } from "react";
import { ProductItem } from "@components/ProductItem";
import "@styles/ProductList.scss";
import axios from "axios";

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList () {
    const [products, setProducts] =  useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(API);
            setProducts(response.data);
        };
        getData();
        console.log(products);
    }, []);

    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem />
                ))}
            </div>
        </section>
    );
}

export { ProductList };