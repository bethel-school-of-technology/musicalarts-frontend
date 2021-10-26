import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "reactstrap";
import "./ShoppingBag.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const ShoppingBag = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
  const [shoppingOrder, setShoppingOrder] = useLocalStorage(
    "productsOrdered",
    []
  );
  const [subTotal, setSubTotal] = useLocalStorage("totalPrice", []);

  const totalPrice = () => {
    if (shoppingBag) {
      return shoppingBag.reduce((a, c) => a + c.price * c.bagQty, 0);
    } else {
      return <p>Total Price: $0</p>;
    }
  };

  useEffect(() => {
    let shoppingBag = JSON.parse(localStorage.getItem("shoppingBag"));
    console.log(shoppingBag);
    setShoppingBag(shoppingBag);
  }, []);

  const submitShoppingBag = () => {
    const array = JSON.parse(localStorage.getItem("shoppingBag"));

    const productsOrdered = array.map((product) => {
      return {
        productId: product.id,
        productName: product.productName,
        quantity: product.bagQty,
        price: product.price,
      };
    });
    setShoppingOrder({ ...shoppingOrder, productsOrdered });

    const totalPrice = shoppingBag.reduce((a, c) => a + c.price * c.bagQty, 0);
    setSubTotal({ ...subTotal, totalPrice });
  };

  const removeItem = (product) => {
    let shoppingBagCopy = [...shoppingBag];
    shoppingBagCopy = shoppingBagCopy.filter((item) => item.id !== product.id);
    setShoppingBag(shoppingBagCopy);
    localStorage.setItem("shoppingBag", JSON.stringify(shoppingBagCopy));
  };

  return (
    <Container className="shopbag shadow-lg rounded text-center">
      <div>
        <h1 className="title">Shopping Bag</h1>

        {shoppingBag === null || shoppingBag === [] ? (
          <p className="emptybag">Shopping Bag is Empty</p>
        ) : (
          <section>
            {shoppingBag.map((product) => (
              <Card className="card shadow-lg mb-5 rounded" key={product.id}>
                <div className="text-center image">
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

                <div className="text-center">
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
            <div className="text-center">
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
      </div>
    </Container>
  );
};

export default ShoppingBag;
