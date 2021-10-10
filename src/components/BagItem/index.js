import { Card } from "reactstrap";
import bagitem from "./BagItem.module.css";

const BagItem = (props) => {
  return (
    <li className={bagitem.item}>
      <Card className={bagitem.card}>
        <div className={bagitem.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={bagitem.content}>
          <h3>Title: {props.title}</h3>
          <p>Type: {props.type}</p>
          <p>Price: {props.price}</p>
        </div>
        <div className={bagitem.actions}>
          <button>Remove From Bag</button>
        </div>
      </Card>
    </li>
  );
};

export default BagItem;
