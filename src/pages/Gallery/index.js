import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Item from "../../components/Item";
import API from "../../utils/API";
import { withRouter } from "react-router";
import useLocalStorage from "../../hooks/useLocalStorage";

const Gallery = () => {
  const [inventory, setInventory] = useState([]);
  const [bag, setBag] = useLocalStorage("shoppingBag", []);

  useEffect(() => {
    API.getListings().then((res) => {
      setInventory(res.data);
    });
  }, []);
  const addToBag = (product) => {
    setBag([...bag, product]);
  };

  return (
    <div>
      <h2>Welcome to the Gallery of galleries</h2>

      <div>
        {inventory.map((item) => (
          <Container key={item.id}>
            <Item item={item} />
            {item.quantity === 0 || item.quantity === null ? (
              <p style={{ color: "red" }}>Sold Out</p>
            ) : (
              <div>
                <p style={{ color: "green" }}>In Stock</p>
                <button onClick={() => addToBag(item)}>Add to Bag</button>
              </div>
            )}
          </Container>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Gallery);
