import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// The Redux store keeps the application state in one place.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});