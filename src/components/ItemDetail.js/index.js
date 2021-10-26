import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './ItemDetail.css';

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
    <div className='item-detail'>
      <Container className='mt-5 mb-5 text-center d-flex align-items-center justify-content-around pt-4 pb-4'>
        {inventory.imageUrl === null || inventory.imageUrl === '' ? (
          <img
            className='detail-image'
            src='https://i.postimg.cc/kgmdKBXP/noimage.png'
            alt={inventory.productName}
          />
        ) : (
          <img
            className='detail-image'
            src={inventory.imageUrl}
            alt={inventory.productName}
          />
        )}
        <div className='d-flex flex-column'>
          <h1 className='detail-text'>Title: {inventory.productName}</h1>
          <h3 className='detail-text'>
            Price:${inventory.price} | Genre:{inventory.genre} | Category:
            {inventory.category}
          </h3>
          <p className='detail-text'>Description: {inventory.description}</p>
          {inventory.quantity === 0 || inventory.quantity === null ? (
            <p style={{ color: '#ff0000cc' }}>Sold Out</p>
          ) : (
            <div>
              <p style={{ color: '#0080009d' }}>In Stock</p>
            </div>
          )}
          <Link className='mb-5 text-center' to='/gallery'>
            Back to Gallery
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(ItemDetail);
