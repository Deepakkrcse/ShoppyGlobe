import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-card">
    {/* Browser loads the image only when it is close to the viewport. */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div className="card-buttons">
        <Link to={`/product/${product.id}`}>
          View
        </Link>

        <button 
            onClick={handleAddToCart}
            title="Add this product to your cart"
        >
            Add to Cart
        </button>
      </div>
    </article>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;