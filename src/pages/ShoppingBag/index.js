import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import BagItem from "../../components/BagItem";
import { Card } from "reactstrap";
import bagitem from "../../components/BagItem/BagItem.module.css";
//import BagList from "../../components/BagList";
import "./ShoppingBag.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const ShoppingBag = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
  const [shoppingOrder, setShoppingOrder] = useLocalStorage(
    "productsOrdered",
    []
  );
  //const [subTotal, setSubTotal] = useState(0);
  // const [qty, setQty] = useState({
  //   quantity: 1,
  // });

  //const totalPrice = shoppingBag.reduce((a, c) => a + c.price * c.bagQty, 0);

  const totalPrice = () => {
    if (shoppingBag) {
      return shoppingBag.reduce((a, c) => a + c.price * c.bagQty, 0);
    } else {
      return <p>Total Price: $0</p>;
    }
  };

  //const [bag, setBag] = seLocalStorage("shoppingBag", [...shoppingBag])
  useEffect(() => {
    let shoppingBag = JSON.parse(localStorage.getItem("shoppingBag"));
    console.log(shoppingBag);
    setShoppingBag(shoppingBag);
  }, []);

  const submitShoppingBag = () => {
    const array = JSON.parse(localStorage.getItem("shoppingBag"));
    // const newObject = Object.assign({}, array);
    // console.log(newObject);
    // const productsOrdered = [
    //   {
    //     productId: `${product.id}`,
    //     productName: newObject.productName,
    //     quantity: newObject.bagQty,
    //     price: newObject.price,
    //   },
    // ];

    const productsOrdered = array.map((product) => {
      return {
        productId: product.id,
        productName: product.productName,
        quantity: product.bagQty,
        price: product.price,
      };
    });
    setShoppingOrder([{ ...shoppingOrder, productsOrdered }]);

    //price.productPrice = 0;
    //setSubTotal([...subTotal, price]);

    //shoppingOrder.push(subTotal);

    //localStorage.removeItem('shoppingBag')
  };

  const removeItem = (product) => {
    let shoppingBagCopy = [...shoppingBag];
    shoppingBagCopy = shoppingBagCopy.filter((item) => item.id !== product.id);
    setShoppingBag(shoppingBagCopy);
    localStorage.setItem("shoppingBag", JSON.stringify(shoppingBagCopy));
  };

  return (
    <div>
      <main>
        <h1 className="title">Shopping Bag</h1>

        {/*<BagList bag={ShoppingBag_Data} />*/}
        {shoppingBag === null || shoppingBag === [] ? (
          <p>Shopping Bag is Empty</p>
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

                  <p>Qty: {product.bagQty}</p>
                  <p>Total Price: ${product.bagQty * product.price}</p>

                  {/* {product.quantity > 0 && (
                    <>
                      <li>
                        <div className='row'>
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.quantity).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                    </>
                  )} */}
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
            ))}

            <p className="subtotal">Sub Total: ${totalPrice().toFixed(2)} </p>

            <Link to="/checkout">
              <button
                onClick={() => submitShoppingBag(shoppingBag)}
                className="checkout"
              >
                Proceed To Checkout
              </button>
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
