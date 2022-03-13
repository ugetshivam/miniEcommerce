import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { incrementQtyHandler, decrementQtyHandler, calculatePrice, deleteHandler, emptyCart } from '../../redux/cartSlice';
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {

    const [toggleMessage, setToggleMessage] = useState(false);
    const [toggleError, setToggleError] = useState(false);
    const { cart, totalPrice, cartLength } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculatePrice());
    }, [cart])

    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(emptyCart());
        if (cartLength !== 0) {
            setToggleMessage(true);
            setToggleError(false);
        } else {
            setToggleMessage(false);
            setToggleError(true);
        }

    }


    return (
        <div className={`${styles.container} container`}>
            {toggleMessage && <h1 className={styles.placed}>Your order has been placed. Thank you for shopping with us.</h1>}
            {toggleError && <h1 className={styles.error}>Cart is empty!</h1>}
            <br />
            <h1 className={styles.title}>My Cart</h1>
            <ul className={styles.cart}>
                {
                    cart.map((item, idx) => (
                        (item.qty > 0) &&
                        <li key={idx}>
                            <p className={styles['item-name']}>{item.name} <span className={styles['item-qty']}>x {item.qty}</span></p>
                            <p className={styles['item-desc']}>{item.desc}</p>
                            <p className={styles['item-price']}>$ {item.price}</p>
                            <button onClick={() => dispatch(decrementQtyHandler(item.id))}>-</button>
                            <button onClick={() => dispatch(incrementQtyHandler(item.id))}>+</button>
                            <button onClick={() => dispatch(deleteHandler(item.id))}>Delete</button>
                        </li>
                    ))
                }
                <li className='flex'><span>Total: <sup style={{ fontSize: "12px" }}>$</sup>{totalPrice}</span> <button onClick={placeOrderHandler} className='btn'>Place Order</button></li>
            </ul>
        </div>
    )
}

export default Cart