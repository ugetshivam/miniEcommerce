import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    cartLength: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const isItemAvailable = state.cart.some((cartItem) => cartItem.id === item.id);

            if (isItemAvailable) {
                state.cart = state.cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty) } : cartItem);

            }
            else {
                state.cart.push(item);
            }
            state.cartLength = state.cart.length;
        },
        incrementQtyHandler: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) + 1 } : cartItem);
            state.cartLength = state.cart.length;
        },
        decrementQtyHandler: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.map((cartItem) => (cartItem.id === itemId && cartItem.qty > 0) ? { ...cartItem, qty: parseInt(cartItem.qty) - 1 } : cartItem);
            state.cart = state.cart.filter((cartItem) => cartItem.qty > 0)
            state.cartLength = state.cart.length;

        },
        calculatePrice: (state) => {
            let price = 0;
            state.cart.forEach((cartItem) => price += cartItem.qty * cartItem.price);
            state.totalPrice = price;
        },
        deleteHandler: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
            state.cartLength = state.cart.length;
        },
        emptyCart: (state) => initialState
    }
});

export const { addItem, incrementQtyHandler, decrementQtyHandler, calculatePrice, deleteHandler, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;