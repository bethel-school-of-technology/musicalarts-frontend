import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
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
  return (
    <div>
      <Card>
        <Link to={`/gallery/${item.id}`}>
          {item.imageUrl === null ? (
            <CardImg
              top
              width='100%'
              src='https://i.postimg.cc/2y43Z54p/noimg.png'
              alt='Card image cap'
            />
          ) : (
            <CardImg
              top
              height='400px'
              width='100%'
              src={item.imageUrl}
              alt={item.productName}
            />
          )}
        </Link>

        <CardBody>
          <CardTitle tag='h5'>{item.productName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            ${item.price} | {item.genre} | {item.category}
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          {item.quantity === 0 || item.quantity === null ? (
            <p style={{ color: 'red' }}>Sold Out</p>
          ) : (
            <div>
              <p style={{ color: 'green' }}>In Stock</p>
              <Button>Add to Bag </Button>
            </div>
          )}
          <Link to={`/gallery/${item.id}`}>
            <Button>View</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Item);
