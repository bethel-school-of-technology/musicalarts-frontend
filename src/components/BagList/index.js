import BagItem from "../../components/BagItem";
import baglist from "./BagList.module.css";

const BagList = (item) => {
  return (
    <ul className={baglist.list}>
      {item.bag.map((bag) => (
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
