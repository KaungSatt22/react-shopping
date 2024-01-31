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
        findItem.total = findItem.price * findItem.quantity;
      } else {
        state.cart.push(payload);
      }
    },
    reduceToCart: (state, { payload }) => {
      let findItem = state.cart.find((item) => item.id === payload.id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.total = findItem.price * findItem.quantity;
      } else {
        state.cart = state.cart.filter((item) => item.id !== payload.id);
      }
    },
    removeToCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },
  },
});
export const { addToCart, reduceToCart, removeToCart } = CartSlice.actions;
export const cartItem = (state) => state.cart.cart;

export default CartSlice.reducer;
