import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let findItem = state.cart.find((item) => item.id === payload.id);
      if (findItem) {
        findItem.quantity++;
        findItem.total += payload.price;
      } else {
        state.cart.push(payload);
      }
    },
    reduceToCart: (state, { payload }) => {
      let findItem = state.cart.find((item) => item.id === payload.id);
      let findIdx = state.cart.findIndex((item) => item.id === payload.id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.total -= payload.price;
      } else {
        state.cart.splice(findIdx, 1);
      }
    },
    removeToCart: (state, { payload }) => {
      let findIdx = state.cart.findIndex((item) => item.id === payload.id);
      state.cart.splice(findIdx, 1);
    },
  },
});
export const { addToCart, reduceToCart, removeToCart } = CartSlice.actions;
export const cartItem = (state) => state.cart.cart;

export default CartSlice.reducer;
