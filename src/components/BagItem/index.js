import { Card } from "reactstrap";
import bagitem from "./BagItem.module.css";
import React, { useState } from "react";

const BagItem = (product) => {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (product) => {
    const exist = cartItems.find((e) => e.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((e) =>
          e.id === product.id ? { ...exist, qty: exist.qty + 1 } : e
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeItem = (product) => {
    const exist = cartItems.find((e) => e.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((e) => e.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((e) =>
          e.id === product.id ? { ...exist, qty: exist.qty - 1 } : e
        )
      );
    }
  };

  return (
    <li className={bagitem.item}>
      <Card className={bagitem.card}>
        <div className={bagitem.image}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={bagitem.content}>
          <h3>Title: {product.title}</h3>
          <p>Type: {product.type}</p>
          <p>Price: {product.price}</p>
        </div>
        <div className={bagitem.additem}>
          <button onClick={() => addItem(product)}> + </button>
        </div>
        <div className={bagitem.removeitem}>
          <button onClick={() => removeItem(product)}> - </button>
        </div>
      </Card>
    </li>
  );
};

export default BagItem;

//import { Card } from "reactstrap";
//import bagitem from "./BagItem.module.css";
//import React, { useState } from "react";

//const BagItem = (item) => {
//const { removeItem } = useState();

/*return (
    <li className={bagitem.item}>
      <Card className={bagitem.card}>
        <div className={bagitem.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={bagitem.content}>
          <h3>Title: {item.title}</h3>
          <p>Type: {item.type}</p>
          <p>Price: {item.price}</p>
        </div>
        <div className={bagitem.actions}>
          <button onClick={() => removeItem(item)}>Remove From Bag</button>
          <button>Remove From Bag</button>
        </div>
      </Card>
    </li>
  );
};

export default BagItem;*/
