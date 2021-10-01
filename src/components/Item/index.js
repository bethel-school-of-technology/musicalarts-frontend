import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Item = ({ item }) => {
  return (
    <div>
      <Card>
        {/* TODO: Need to create a page to view single item. Clicking on the image should link to ProductPage/ItemPage */}
        <Link to="/home">
          <CardImg top width="100%" src={item.img_url} alt="Card image cap" />
        </Link>

        <CardBody>
          <CardTitle tag="h5">{item.item_name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.price} | {item.creator}
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button outline color="primary">
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
