import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { setSearch } from "../redux/cartSlice";
import {
  selectCartCount,
  selectSearch,
} from "../redux/selectors";

const Header = ({ title }) => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <Link to="/" className="logo">
        {title}
      </Link>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) =>
          dispatch(setSearch(event.target.value))
        }
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;