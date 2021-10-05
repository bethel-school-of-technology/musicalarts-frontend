import { Link } from "react-router-dom";

import navclass from "./Navigation.module.css";

function FirstNavigation() {
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
            <Link to="/shoppingbag">ShopBag</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default FirstNavigation;
