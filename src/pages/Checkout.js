import CheckoutForm from "../components/forms/CheckoutForm";
import checkoutclass from "./Checkout.module.css";

const CheckoutPage = () => {
  return (
    <section>
      <h1 className={checkoutclass.h1}>Checkout</h1>
      <CheckoutForm />
    </section>
  );
};

export default CheckoutPage;
