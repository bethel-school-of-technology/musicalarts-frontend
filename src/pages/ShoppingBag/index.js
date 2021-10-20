import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import BagItem from "../../components/BagItem";
import { Card } from "reactstrap";
import bagitem from "../../components/BagItem/BagItem.module.css";
//import BagList from "../../components/BagList";
import "./ShoppingBag.css";
//import useLocalStorage from "../../hooks/useLocalStorage";

//const NumberOfItems
// Have a fuction where it counts the number of items in the shopping bag

//const SubTotal
// Have a function where it adds every item's price together

const ShoppingBag = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
  //const [subTotal, setSubTotal] = useLocalStorage('total', 0);
  //const [bag, setBag] = useLocalStorage("shoppingBag", [...shoppingBag])
  useEffect(() => {
    let shoppingBag = JSON.parse(localStorage.getItem("shoppingBag"));
    setShoppingBag(shoppingBag);
  }, []);

  const removeItem = (product) => {
    let shoppingBagCopy = [...shoppingBag];
    shoppingBagCopy = shoppingBagCopy.filter((item) => item.id !== product.id);
    setShoppingBag(shoppingBagCopy);
    localStorage.setItem("shoppingBag", JSON.stringify(shoppingBagCopy));
  };

  // const addItem = (product) => {
  //   const exist = shoppingBag.find((e) => e.id === product.id);
  //   if (exist) {
  //     setShoppingBag(
  //       shoppingBag.map((e) =>
  //         e.id === product.id ? { ...exist, qty: product.exist.qty + 1 } : e
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  return (
    <div>
      <main>
        <h1 className="title">Shopping Bag</h1>

        {/*<BagList bag={ShoppingBag_Data} />*/}
        {shoppingBag === null || shoppingBag === [] ? (
          <p>Shopping Cart is Empty</p>
        ) : (
          <section>
            {shoppingBag.map((product) => (
              <Card className={bagitem.card} key={product.id}>
                <div className={bagitem.image}>
                  {product.imageUrl === null || product.imageUrl === "" ? (
                    <img
                      src="https://i.postimg.cc/2y43Z54p/noimg.png"
                      alt={product.productName}
                    />
                  ) : (
                    <img src={product.imageUrl} alt={product.productName} />
                  )}
                </div>
                <div className={bagitem.content}>
                  <h3>Title: {product.productName}</h3>
                  <p>Type: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <input
                    type="number"
                    min="1"
                    max={product.quantity}
                    placeholder="Qty"
                    name="quantity"
                  />
                </div>
                {/*<div className={bagitem.count}>
               <input>Count:{product.exist.qty}</input>
               </div>*/}
                {/* <div className={bagitem.additem}>
                <button onClick={() => addItem(product)}> + </button>
              </div> */}

                <div className={bagitem.removeitem}>
                  <button onClick={() => removeItem(product)}>
                    Remove From Bag
                  </button>
                </div>
              </Card>
              // <div key={p.id}>
              //   <p>{p.productName}</p>
              // </div>
            ))}
            <p className="subtotal">Sub Total: </p>

            <Link to="/checkout">
              <button className="checkout">Proceed To Checkout</button>
            </Link>

            <Link to="/gallery">
              <button className="shopping">Continue Shopping</button>
            </Link>
          </section>
        )}
      </main>
    </div>
  );
};

export default ShoppingBag;
