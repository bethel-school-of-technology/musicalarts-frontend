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

const UserItem = ({ item }) => {
  // TODO: figure out how to go to the users view of a single item
  return (
    <div>
      <Card>
        <Link to={`/gallery/${item.id}`}>
          <CardImg
            top
            width='100%'
            src='https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_1280.jpg'
            alt='Card image cap'
          />
        </Link>

        <CardBody>
          <CardTitle tag='h5'>{item.productName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            ${item.price} | {item.genre}
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          <Link to={`/gallery/${item.id}`}>
            <Button>Edit</Button>
          </Link>
          <Button>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(UserItem);
