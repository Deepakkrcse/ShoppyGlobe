import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../redux/selectors";

import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  if (items.length === 0 && !orderPlaced) {
    return (
      <section className="empty">
        <h2>No items to checkout</h2>
        <p>Add products to your cart first.</p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <div>
        <h1>Checkout</h1>

        {orderPlaced ? (
          <div className="success">
            <h2>Order placed</h2>
            <p>
              Thank you for your order.
            </p>
            <p>
              Returning to Home...
            </p>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();

              // Clear the cart after the order is submitted.
              dispatch(clearCart());

              setOrderPlaced(true);

              // Redirect to Home automatically.
              setTimeout(() => {
                window.location.href = "/";
              }, 1500);
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              placeholder="Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              required
            />

            <button type="submit">
              Place Order
            </button>
          </form>
        )}
      </div>

      {!orderPlaced && (
        <aside className="order-summary">
          <h2>Order Summary</h2>

          {items.map((item) => (
            <p key={item.id}>
              {item.title} × {item.quantity}
            </p>
          ))}

          <hr />

          <strong>
            Total: ${total.toFixed(2)}
          </strong>
        </aside>
      )}
    </section>
  );
};

export default Checkout;