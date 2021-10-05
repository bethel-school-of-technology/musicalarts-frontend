import ShippingInfoForm from "../components/forms/CheckoutForms/ShippingInfo";
import PaymentMethodForm from "../components/forms/CheckoutForms/PaymentMethod";
import GrandTotal from "../components/forms/CheckoutForms/GrandTotal";
import checkoutclass from "./Checkout.module.css";

const CheckoutPage = () => {
  return (
    <section>
      <h1 className={checkoutclass.h1}>Checkout</h1>
      <ShippingInfoForm />
      <PaymentMethodForm />
      <GrandTotal />
    </section>
  );
};

export default CheckoutPage;
