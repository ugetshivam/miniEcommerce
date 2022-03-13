import React from 'react'
import styles from './CartButton.module.css';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CartButton = () => {

    const cartLength = useSelector((state) => state.cart.cartLength);

    return (
        <Link to='/cart' className={`${styles['cart-btn']}`}>
            <span className={styles.text}><FaShoppingCart className={styles['cart-icon']} /> Your Cart </span>
            <span className={styles.badge}>{cartLength}</span>
        </Link>
    )
}

export default CartButton