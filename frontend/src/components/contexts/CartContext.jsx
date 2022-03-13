import React, { useState, createContext } from 'react'

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addItemHandler: (item) => { },
    incrementItem: (itemId) => { },
    decrementItem: (itemId) => { },
    // placeOrder:()=>{}
})


export const CartContextProvider = (props) => {

    const initialItem = [];

    const [cart, setCart] = useState(initialItem);


    // useEffect(() => {
    //     window.localStorage.setItem('cart', JSON.stringify(cart));
    // },[cart])

    const addItemHandler = (item) => {
        setCart((prevState) => {

            const isItemAvailable = prevState.some((cartItem) => cartItem.id === item.id);

            if (isItemAvailable) {
                return prevState.map((cartItem) => cartItem.id === item.id ? { ...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty) } : cartItem);
            }

            return [...prevState, item];
        })
    }

    const incrementQtyHandler = (itemId) => {
        setCart((prevState) => {
            return prevState.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) + 1 } : cartItem);
        })
    }

    const decrementQtyHandler = (itemId) => {
        setCart((prevState) => {
            return prevState.map((cartItem) => (cartItem.id === itemId && cartItem.qty > 0) ? { ...cartItem, qty: parseInt(cartItem.qty) - 1 } : cartItem);
        })
    }

    // const placeOrderHandler = async() => {
    //         // local url = http://localhost:8000/register
    //     // Heroku url = https://food-app-server-mern.herokuapp.com/register
    //     await axios.post('https://food-app-server-mern.herokuapp.com/placeorder', { cart })
    //     setCart(() => {
    //         return [];
    //     });
    // }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addItemHandler: addItemHandler,
        incrementItem: incrementQtyHandler,
        decrementItem: decrementQtyHandler,
        // placeOrder:placeOrderHandler
    }


    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;