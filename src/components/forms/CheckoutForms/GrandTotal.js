import grandclass from "./GrandTotal.module.css";
import { Link } from "react-router-dom";

const GrandTotal = () => {
  return (
    <div>
      <h4 className={grandclass.h4}>Grand Total</h4>

      <p className={grandclass.p}>* Grand Total will be displayed here *</p>

      <Link to="/ordersubmission">
        <button
          className={grandclass.button1}
          // onClick={submitHandler}
        >
          Submit Order
        </button>
      </Link>
      <br />
      <Link to="/bag">
        <button className={grandclass.button2}>Back To Shopping Bag</button>
      </Link>
    </div>
  );
};

export default GrandTotal;
