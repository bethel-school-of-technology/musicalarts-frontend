//import CheckoutForm from "../components/forms/CheckoutForms/CheckoutForm";
import ShippingInfoForm from "../components/forms/CheckoutForms/ShippingInfo";
import PaymentMethodForm from "../components/forms/CheckoutForms/PaymentMethod";
import GrandTotal from "../components/forms/CheckoutForms/GrandTotal";
import "./Checkout.css";

const CheckoutPage = () => {
  return (
    <section>
      <h1 className="h1">Checkout</h1>
      <ShippingInfoForm />
      <PaymentMethodForm />
      <GrandTotal />
    </section>
  );
};

export default CheckoutPage;
