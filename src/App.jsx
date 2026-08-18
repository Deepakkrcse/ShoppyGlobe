import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { lazy, Suspense } from "react";

const Header = lazy(() =>
  import("./components/Header")
);

const ProductList = lazy(() =>
  import("./components/ProductList")
);

const ProductDetail = lazy(() =>
  import("./components/ProductDetail")
);

const Cart = lazy(() =>
  import("./components/Cart")
);

const Checkout = lazy(() =>
  import("./components/Checkout")
);

const NotFound = lazy(() =>
  import("./components/NotFound")
);

const Loading = () => (
  <div className="message">
    Loading...
  </div>
);

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header title="ShoppyGlobe" />
      </Suspense>

      <main className="container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <ProductList />,
      },

      {
        path: "product/:id",
        element: <ProductDetail />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;