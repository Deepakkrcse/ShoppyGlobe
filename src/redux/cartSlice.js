import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  search: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add a product or increase its quantity if it already exists.
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove a product completely from the cart.
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase product quantity.
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity but never allow it below 1.
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Empty the cart after a successful order.
    clearCart: (state) => {
      state.items = [];
    },

    // Search text is also stored in Redux as required.
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setSearch,
} = cartSlice.actions;

export default cartSlice.reducer;