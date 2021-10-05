import { Link } from "react-router-dom";
import "./ShoppingBag.css";

const ShoppingBag = () => {
  return (
    <div>
      <main>
        <h1 className="title">Shopping Bag</h1>

        <p className="numberofitems">Number of Items: </p>

        <p className="subtotal">Sub Total: </p>

        <Link to="/checkout">
          <button className="checkout">Proceed To Checkout</button>
        </Link>

        <Link to="/gallery">
          <button className="shopping">Continue Shopping</button>
        </Link>
      </main>
    </div>
  );
};

export default ShoppingBag;
