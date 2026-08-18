import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
    {/* Cart images are also loaded lazily. */}
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
      />

      <div>
        <h3>{item.title}</h3>

        <p>
          Price: ${item.price}
        </p>

        <div className="quantity">
          <button
            onClick={() =>
              dispatch(
                decreaseQuantity(item.id)
              )
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                increaseQuantity(item.id)
              )
            }
          >
            +
          </button>
        </div>

        <button
          className="remove"
          onClick={() =>
            dispatch(
              removeFromCart(item.id)
            )
          }
          title="Remove product from cart"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;