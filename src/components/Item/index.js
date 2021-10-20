import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import {
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
        <Link to={`/gallery/${item.id}`}>
          {item.imageUrl === null || item.imageUrl === "" ? (
            <CardImg
              top
              width="100%"
              src="https://i.postimg.cc/2y43Z54p/noimg.png"
              alt="Card image cap"
            />
          ) : (
            <CardImg
              top
              height="400px"
              width="100%"
              src={item.imageUrl}
              alt={item.productName}
            />
          )}
        </Link>

        <CardBody>
          <CardTitle tag="h5">{item.productName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            ${item.price} | {item.genre} | {item.category}
          </CardSubtitle>
          <CardText>{item.description}</CardText>

          <Link to={`/gallery/${item.id}`}>View</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Item);
