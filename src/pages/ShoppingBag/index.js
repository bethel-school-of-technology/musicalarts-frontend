import { Link } from "react-router-dom";
import BagList from "../../components/BagList";
import "./ShoppingBag.css";

const ShoppingBag_Data = [
  {
    id: 1,
    image:
      "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2019/12/web3-prince-of-peace-9-year-old-art-jesus-painting-facebook.jpg",
    title: "Gods Love",
    type: "Music",
    price: "$15.99",
  },
  {
    id: 2,
    image:
      "https://coffeewiththelord.files.wordpress.com/2016/04/beautiful-sunset-in-the-mountains.jpg",
    title: "Glory To God",
    type: "Art",
    price: "$599.99",
  },
  {
    id: 3,
    image: "https://www.christian.org.uk/wp-content/uploads/cross01.png",
    title: "All For Him",
    type: "Music",
    price: "$17.99",
  },
];

//const NumberOfItems
// Have a fuction where it counts the number of items in the shopping bag

//const SubTotal
// Have a function where it adds every item's price together

const ShoppingBag = () => {
  return (
    <div>
      <main>
        <h1 className="title">Shopping Bag</h1>

        <section>
          <BagList bag={ShoppingBag_Data} />
        </section>

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
