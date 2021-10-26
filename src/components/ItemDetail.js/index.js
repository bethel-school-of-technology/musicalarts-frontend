import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const ItemDetail = ({ history }) => {
  const [inventory, setInventory] = useState([]);
  let { itemId } = useParams();

  useEffect(() => {
    const url = `http://localhost:3001/products/${itemId}`;
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
      <Container className='text-center'>
        <h1>{inventory.productName}</h1>
        {inventory.imageUrl === null || inventory.imageUrl === '' ? (
          <img
            src='https://i.postimg.cc/kgmdKBXP/noimage.png'
            alt={inventory.productName}
          />
        ) : (
          <img src={inventory.imageUrl} alt={inventory.productName} />
        )}

        <p>{inventory.description}</p>
        {inventory.quantity === 0 || inventory.quantity === null ? (
          <p style={{ color: 'red' }}>Sold Out</p>
        ) : (
          <div>
            <p style={{ color: 'green' }}>In Stock</p>
          </div>
        )}
        <Link to='/gallery'>Back to Gallery</Link>
      </Container>
    </div>
  );
};

export default withRouter(ItemDetail);
