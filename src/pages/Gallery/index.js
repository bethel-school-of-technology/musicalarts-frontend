import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Item from '../../components/Item';
import API from '../../utils/API';
import { withRouter } from 'react-router';

const Gallery = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getListings().then((res) => {
      setInventory(res.data);
    });
  }, []);
  const addToBag = (product) => {
    //console.log('shoppingCart...');
    console.log(product);
    const bag = getBagItems();
    //const cart = JSON.parse(localStorage.getItem('shoppingCart'));
    // TODO if nothing in array, init empty array
    console.log(bag);
    //if (!cart) return [];
    //cart.push(product);
    localStorage.setItem('shoppingBag', JSON.stringify([...bag, product]));
  };

  const getBagItems = () => {
    const bagItems = localStorage.getItem('shoppingBag');
    if (!bagItems) {
      return [];
    }
    return JSON.parse(bagItems);
  };

  return (
    <div>
      <h2>Welcome to the Gallery of galleries</h2>
      <div>
        {inventory.map((item) => (
          <Container key={item.id}>
            <Item item={item} />
            {item.quantity === 0 || item.quantity === null ? (
              <p style={{ color: 'red' }}>Sold Out</p>
            ) : (
              <div>
                <p style={{ color: 'green' }}>In Stock</p>
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
