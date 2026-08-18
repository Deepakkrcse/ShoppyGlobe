import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <section className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you requested does not exist.
      </p>

      <p>
        <strong>Requested URL:</strong>{" "}
        {location.pathname}
      </p>

      <p>
        <strong>Error:</strong>{" "}
        HTTP 404 - Resource Not Found
      </p>

      <Link to="/">
        Go back Home
      </Link>
    </section>
  );
};

export default NotFound;