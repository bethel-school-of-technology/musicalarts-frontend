import "./AddToBag.css";
import React, { useState, useEffect } from "react";

const AddToBag = () => {
  const [cart, setCart] = useState([]);
  const addToBag = () => {
    let cartItem = {
      productId: { productId },
      productName: { productName },
      quantity: { quantity },
      price: { price },
    };
    console.log(cartItem);
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItem));
    });
  };

  return (
    <div>
      <button onClick={addToBag}>Add To Bag</button>
    </div>
  );
};

export default AddToBag;
