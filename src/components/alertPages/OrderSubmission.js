import { Link } from "react-router-dom";
import submissionclass from "./OrderSubmission.module.css";

const OrderSubmissionAlert = () => {
  return (
    <div>
      <h1 className={submissionclass.h1}>
        Your Order Was Successfully Submitted!
      </h1>
      <div>
        <Link to={"/gallery"}>
          <button className={submissionclass.button}>Back To Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSubmissionAlert;
