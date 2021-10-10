import BagItem from "../../components/BagItem";
import baglist from "./BagList.module.css";

const BagList = (props) => {
  return (
    <ul className={baglist.list}>
      {props.bag.map((bag) => (
        <BagItem
          key={bag.id}
          id={bag.id}
          image={bag.image}
          title={bag.title}
          type={bag.type}
          price={bag.price}
        />
      ))}
    </ul>
  );
};

export default BagList;
