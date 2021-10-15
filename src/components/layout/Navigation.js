import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navclass from "./Navigation.module.css";

const Navigation = () => {
  //const { countCartItems } = props;
  return (
    <header className={navclass.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/bag">
              ShopBag{" "}
              {/*{""}
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}*/}
              {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
              {/*<FontAwesomeIcon icon={faShoppingCart} />*/}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
