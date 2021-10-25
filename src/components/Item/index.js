import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Item.css';

import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const Item = ({ item }) => {
  const [bag, setBag] = useLocalStorage('shoppingBag', []);
  const addToBag = (product) => {
    var isInBag = bag.find((obj) => {
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

  return (
    <div>
      <Card className='shadow-lg'>
        <Link to={`/gallery/${item.id}`}>
          {item.imageUrl === null || item.imageUrl === '' ? (
            <CardImg
              top
              height='450px'
              src='https://i.postimg.cc/kgmdKBXP/noimage.png'
              alt='Card image cap'
            />
          ) : (
            <CardImg
              top
              height='450px'
              src={item.imageUrl}
              alt={item.productName}
            />
          )}
        </Link>
        <hr style={{ size: '30' }} />
        <CardBody>
          <CardTitle tag='h3'>{item.productName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            ${item.price} | {item.genre} | {item.category}
          </CardSubtitle>
          <CardText>{item.description}</CardText>

          <Link to={`/gallery/${item.id}`}>View</Link>
          {item.quantity === 0 || item.quantity === null ? (
            <p style={{ color: 'red' }}>Sold Out</p>
          ) : (
            <div>
              <p style={{ color: 'green' }}>In Stock</p>
              <Button outline size='sm' block onClick={() => addToBag(item)}>
                Add to Bag
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Item);
