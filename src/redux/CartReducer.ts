import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: []
    },
    reducers: {
      addToCart: (state, action) => {
        state.cartItems.push(action.payload);
      },
      incrementQuantity: (state, action) => {
        const item = state.cartItems.find(item => item.id === action.payload);
        if (item) {
          item.quantity++;
        }
      },
      decrementQuantity: (state, action) => {
        const item = state.cartItems.find(item => item.id === action.payload);
        if (item && item.quantity > 0) {
          item.quantity--;
        }
      }
    }
  });

export const {addToCart, incrementQuantity, decrementQuantity} = cartSlice.actions

export default cartSlice.reducer;