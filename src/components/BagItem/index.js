import { Card } from "reactstrap";
import bagitem from "./BagItem.module.css";
//import React, { useState } from "react";

const BagItem = (item) => {
  //const { removeItem } = useState();

  return (
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
          {/*<button onClick={() => removeItem(item)}>Remove From Bag</button>*/}
          <button>Remove From Bag</button>
        </div>
      </Card>
    </li>
  );
};

export default BagItem;
