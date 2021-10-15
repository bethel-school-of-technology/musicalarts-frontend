import "./AddToBag.css";
import React, { useState, useEffect } from "react";

const AddToBag = () => {
  const [cart, setCart] = useState([]);
  const addToBag = () => {
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  };

  return (
    <div>
      <button onClick={addToBag}>Add To Bag</button>
    </div>
  );
};

export default AddToBag;
