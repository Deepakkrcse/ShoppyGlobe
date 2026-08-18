import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../redux/selectors";

const CartItem = lazy(() =>
  import("./CartItem")
);

const Cart = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <section className="empty">
        <h2>Your cart is empty</h2>

        <Link to="/">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <Suspense
          key={item.id}
          fallback={<p>Loading cart item...</p>}
        >
          <CartItem item={item} />
        </Suspense>
      ))}

      <div className="cart-summary">
        <h2>
          Total: ${total.toFixed(2)}
        </h2>

        <Link
          to="/checkout"
          className="checkout-button"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;