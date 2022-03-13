import React from 'react'
import Product from './Product'
import styles from "./Product.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchContext from '../../../contexts/SearchContext'
import { useContext } from 'react'
const ProductList = (props) => {
    const searchCtx = useContext(SearchContext);
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
    return (
        <div className={`${styles.container} flex container`}>
            {
                products.map((product) => (
                    product.name.toLowerCase().includes(searchCtx.searchField.toLowerCase()) ?
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