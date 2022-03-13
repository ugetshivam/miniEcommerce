import React from 'react'
import Product from './Product'
import styles from "./Product.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const ProductList = (props) => {
    const searchField = useSelector((state) => state.search.searchField);
    const [products, setProducts] = useState([]);
    async function getProducts() {
        try {
            const res = await axios.get('http://localhost:8080/products');
            setProducts(res.data);
        }
        catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        getProducts();
    }
        , [])
    console.table(products);
    return (
        <div className={`${styles.container} flex container`}>
            {
                products.map((product) => (
                    product.name.toLowerCase().includes(searchField.toLowerCase()) ?
                        <Product
                            id={product._id}
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            desc={product.desc}
                            img={product.img}
                            payload={props.payload}
                        /> : null

                ))
            }
        </div>
    )
}

export default ProductList