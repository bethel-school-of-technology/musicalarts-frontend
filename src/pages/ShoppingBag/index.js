import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card } from "reactstrap";
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
        {shoppingBag === null || shoppingBag === [] ? (
          <p className="emptybag">Shopping Bag is Empty</p>
        ) : (
          <section>
            {shoppingBag.map((product) => (
              <Card className="card" key={product.id}>
                <div className="image">
                  {product.imageUrl === null || product.imageUrl === "" ? (
                    <img
                      src="https://i.postimg.cc/2y43Z54p/noimg.png"
                      alt={product.productName}
                    />
                  ) : (
                    <img src={product.imageUrl} alt={product.productName} />
                  )}
                </div>
                <div className="content">
                  <h3>{product.productName}</h3>
                  <div>
                    <p>Type: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Qty: {product.bagQty}</p>
                    <p>Total Price: ${product.bagQty * product.price}</p>
                  </div>
                </div>

                <div className="col text-center">
                  <Button
                    className="removeitem"
                    onClick={() => removeItem(product)}
                  >
                    Remove From Bag
                  </Button>
                </div>
              </Card>
            ))}

            <p className="subtotal">Sub Total: ${totalPrice().toFixed(2)} </p>
            <div className="col text-center">
              <Link
                className="checkout"
                onClick={() => submitShoppingBag(shoppingBag)}
                to="/checkout"
              >
                Proceed To Checkout
              </Link>
              <br />
              <Link className="shopping" to="/gallery">
                Continue Shopping
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ShoppingBag;
