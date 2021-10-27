import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./OrderSubmission.css";

const OrderSubmissionAlert = () => {
  return (
    <Container className="col text-center lastpage">
      <div>
        <h1 className="h1">Your Order Was Successfully Submitted!</h1>
        <div>
          <Link className="button" to={"/gallery"}>
            Back To Gallery
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderSubmissionAlert;
