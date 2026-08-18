import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import useProducts from "../hooks/useProducts";
import { selectSearch } from "../redux/selectors";

const ProductItem = lazy(() => import("./ProductItem"));

const ProductList = () => {
  const {
    products,
    loading,
    error,
  } = useProducts();

  const search = useSelector(selectSearch);

  // Filter the products using search text stored in Redux.
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <p className="message">
        Loading products...
      </p>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Unable to load products</h2>
        <p>{error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <section>
      <h1>Products</h1>

      {filteredProducts.length === 0 ? (
        <p className="message">
          No products found.
        </p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Suspense
              key={product.id}
              fallback={
                <p>Loading product...</p>
              }
            >
              <ProductItem product={product} />
            </Suspense>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;