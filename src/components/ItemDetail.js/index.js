import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const ItemDetail = ({ history }) => {
  const [inventory, setInventory] = useState([]);
  let { itemId } = useParams();

  useEffect(() => {
    const url = `http://localhost:3001/inventory/${itemId}`;
    axios.get(url).then(
      (res) => {
        console.log(res);
        setInventory(res.data);
      },
      (err) => {
        history.push('/home');
      }
    );
  }, [itemId, history]);

  if (!inventory) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <h1>{inventory.itemName}</h1>
      <p>{inventory.description}</p>
      <Link to='/gallery'>Back to Gallery</Link>
      <br />
      <button outline color='primary'>
        Add to cart
      </button>
    </div>
  );
};

export default withRouter(ItemDetail);
