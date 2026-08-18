import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        // Fetch the product using the dynamic route parameter.
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error(
            `Product with ID ${id} was not found.`
          );
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <p className="message">
        Loading product...
      </p>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Product Error</h2>
        <p>{error}</p>
        <p>
          <strong>Product ID:</strong> {id}
        </p>

        <Link to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="detail">
    {/* Lazy loading prevents the image from loading immediately. */}    
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>
          <strong>Category:</strong>{" "}
          {product.category}
        </p>

        <p>
          <strong>Rating:</strong>{" "}
          {product.rating}
        </p>

        <p>
          <strong>Stock:</strong>{" "}
          {product.stock}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        <Link
          to="/cart"
          className="secondary-button"
        >
          Go to Cart
        </Link>
      </div>
    </section>
  );
};

export default ProductDetail;