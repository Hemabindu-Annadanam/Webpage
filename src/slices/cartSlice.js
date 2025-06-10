import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
        console.log('Setting cart:', action);
      state.items = action.payload;
    },
    addToCart(state, action) {
      console.log('Adding to cart:', action);
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      console.log('Removing from cart:', action);
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      console.log('Clearing cart');
      state.items = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
