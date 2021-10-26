import ShippingInfoForm from "../components/forms/CheckoutForms/ShippingInfo";
import PaymentMethodForm from "../components/forms/CheckoutForms/PaymentMethod";
import GrandTotal from "../components/forms/CheckoutForms/GrandTotal";
import "./Checkout.css";
import { Container } from "reactstrap";

const CheckoutPage = () => {
  return (
    <Container className="check shadow-lg rounded text-center">
      <h1 className="h1">Checkout</h1>
      <ShippingInfoForm />
      <PaymentMethodForm />
      <GrandTotal />
    </Container>
  );
};

export default CheckoutPage;
