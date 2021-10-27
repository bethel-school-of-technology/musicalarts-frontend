import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import Item from '../../components/Item';
import API from '../../utils/API';
import { withRouter } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Gallery.css';

const Gallery = () => {
  const [inventory, setInventory] = useState([]);
  const [bag, setBag] = useLocalStorage('shoppingBag', []);
  const addToBag = (product) => {
    let isInBag = bag.find((obj) => {
      return obj.id === product.id;
    });

    console.log(isInBag);
    if (isInBag) {
      if (isInBag.bagQty < product.quantity) {
        isInBag.bagQty++;
        //alert(`${product.productName} added to bag`);
        setBag(bag);
        alert(
          `You currently have ${isInBag.bagQty} of "${product.productName}" in your ShopBag`
        );
      } else {
        alert('Sorry, not enough products in our store');
      }
    } else {
      product.bagQty = 1;
      setBag([...bag, product]);
      bag.push(product);
    }
  };

  useEffect(() => {
    API.getListings().then((res) => {
      setInventory(res.data);
    });
  }, []);

  return (
    <div className='gallery'>
      <div className='gallery-text mt-4'>
        <h2 className='text-center mt-5 mb-5'>MusicalArts Gallery</h2>
      </div>

      <Container fluid className='text-center'>
        <Row className='d-flex justify-content-center'>
          {inventory.map((item) => (
            <Col key={item.id} lg='6'>
              {/* <Item item={item} /> */}
              <Card
                className='shadow-lg'
                style={{ width: '40rem', height: '35rem' }}
              >
                <Link to={`/gallery/${item.id}`}>
                  {item.imageUrl === null || item.imageUrl === '' ? (
                    <CardImg
                      top
                      height='320px'
                      src='https://i.postimg.cc/kgmdKBXP/noimage.png'
                      alt={item.productName}
                    />
                  ) : (
                    <CardImg
                      top
                      height='320px'
                      src={item.imageUrl}
                      alt={item.productName}
                    />
                  )}
                </Link>
                <hr className='mt-1' />
                <CardBody>
                  <CardTitle tag='h3' style={{ color: '#bca1fab7' }}>
                    Title: {item.productName}
                  </CardTitle>
                  <CardSubtitle tag='h6' className='text-muted'>
                    Price: ${item.price} | Genre: {item.genre} | Category:
                    {item.category}
                  </CardSubtitle>

                  <Link to={`/gallery/${item.id}`}>View</Link>
                  {item.quantity === 0 || item.quantity === null ? (
                    <p style={{ color: '#ff0000cc', fontSize: '40px' }}>
                      Sold Out
                    </p>
                  ) : (
                    <div>
                      <p style={{ color: '#0080009d', fontSize: '20px' }}>
                        In Stock
                      </p>
                      <Button
                        type='button'
                        outline
                        size='sm'
                        color='success'
                        onClick={() => addToBag(item)}
                      >
                        Add to Bag
                      </Button>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Gallery);
