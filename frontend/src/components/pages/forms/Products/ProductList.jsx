import React from 'react'
import Product from './Product'
import styles from "./Product.module.css"
const ProductList = ({products}) => {
    console.log('prod',products)
  return (
    <div className={`${styles.container} flex container`}>
        {
            products.map((product)=>{
                return <Product
                    id={product._id}
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    desc={product.desc}
                    img={product.img}
                />
            })
        }
    </div>
  )
}

export default ProductList