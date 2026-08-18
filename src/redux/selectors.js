// Returns all cart products.
export const selectCartItems = (state) => state.cart.items;

// Returns the current search text.
export const selectSearch = (state) => state.cart.search;

// Calculates the total number of products in the cart.
export const selectCartCount = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

// Calculates the total cart price.
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);