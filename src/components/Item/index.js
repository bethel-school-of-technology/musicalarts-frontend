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
        {/* TODO: Need to create a page to view single item. Clicking on the image should link to ProductPage/ItemPage */}
        <Link to={'/' + item.id}>
          <CardImg
            top
            width='100%'
            src='https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_1280.jpg'
            alt='Card image cap'
          />
        </Link>

        <CardBody>
          <CardTitle tag='h5'>{item.title}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {item.price} | {item.genre}
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button outline color='primary'>
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Item);
