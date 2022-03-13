import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartLength: 0
    },
    reducers: {
        addItem: (state, action) => {

        }
    }
})