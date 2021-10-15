import BagItem from "../BagItem";
import baglist from "./BagList.module.css";

const BagList = (product) => {
  return (
    <ul className={baglist.list}>
      {product.bag.map((bag) => (
        <BagItem
          key={bag.id}
          id={bag.id}
          image={bag.image}
          title={bag.title}
          type={bag.type}
          price={bag.price}
          qty={bag.qty}
        />
      ))}
    </ul>
  );
};

export default BagList;
