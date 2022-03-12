import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext';
import styles from './Cart.module.css';


const Cart = () => {

    const cartCtx = useContext(CartContext);
    const cart = cartCtx.cart

    let totalCartPrice = 0;

    if (cart.length === 1) {
        totalCartPrice = cart[0].price * cart[0].qty;
    }
    else if (cart.length > 1) {
        totalCartPrice = 0;
        for (var i = 0; i < cart.length; i += 1) {
            totalCartPrice += cart[i].price * cart[i].qty;
        }
    }

    const placeOrderHandler = () => {
        console.log('clicked');
        cartCtx.placeOrder();
    }


    return (
        <ul className={styles.cart}>
            <li>My Cart</li>
            {
                cart.map((item, idx) => {

                    return <li key={idx}>
                        <p className={styles['item-name']}>{item.name} <span className={styles['item-qty']}>x {item.qty}</span></p>
                        <p className={styles['item-desc']}>{item.desc}</p>
                        <p className={styles['item-price']}>$ {item.price}</p>
                        <button onClick={() => cartCtx.decrementItem(item.id)}>-</button>
                        <button onClick={() => cartCtx.incrementItem(item.id)}>+</button>
                    </li>
                })
            }
            <li className='flex'><span>Total:{totalCartPrice}</span> <button onClick={placeOrderHandler} className='btn'>Place Order</button></li>
        </ul>
    )
}

export default Cart