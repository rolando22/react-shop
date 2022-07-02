import { useEffect, useState } from "react";
import axios from "axios";

function useGetProducts (API) {
    const [products, setProducts] =  useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(API);
            setProducts(response.data);
        };
        getData();
        console.log(products);
    }, []);

    return { products };
};

export { useGetProducts };