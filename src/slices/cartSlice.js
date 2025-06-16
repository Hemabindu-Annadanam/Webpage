import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    incrementQuantity(state, action) {
      const item = state.items[action.payload];
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items[action.payload];
      if (item && (item.quantity || 1) > 1) {
        item.quantity = item.quantity - 1;
      }
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
