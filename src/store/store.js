import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/Cart/CartSlice";
import { shopping } from "../api/api";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    [shopping.reducerPath]: shopping.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopping.middleware),
});
