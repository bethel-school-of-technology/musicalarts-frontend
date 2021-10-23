import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import grandclass from "./GrandTotal.module.css";
//import useLocalStorage from "../../../hooks/useLocalStorage";
//import { useState } from "react";
//import Axios from "axios";

const GrandTotal = (props) => {
  //const [disable, setDisable] = useState(true);
  //const [order, setOrder] = useLocalStorage("customerOrder", {});
  // const [customerOrder, setCustomerOrder] = useState({
  //   buyerFirstName: "",
  //   buyerLastName: "",
  //   buyerEmail: "",
  //   buyerPhoneNumber: "",
  //   streetAddress: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  //   nameOnCard: "",
  //   cardNumber: "",
  //   cardExpirationDate: "",
  //   cardCvv: "",
  //   productsOrdered: [
  //     { productId: "", productName: "", quantity: "", price: "" },
  //   ],
  // });
  const submitOrder = () => {
    //TODO: Add in checks/switch so before the order is submitted the new object is created in local storage,
    //you get the order back from local storage 'JSON.parse(localStorage.getItem('customerOrder))'
    //TODO: set up axios POST to send the customerOrder object to the backend

    //FIXME:
    // const paymentMethod = JSON.parse(localStorage.getItem('paymentmethod'));
    // const shippingInfo = JSON.parse(localStorage.getItem('shippinginfo'));
    const checkoutInfo = JSON.parse(localStorage.getItem("checkoutinfo"));
    const productsOrdered = JSON.parse(localStorage.getItem("productsOrdered"));
    const userOrder = {
      ...checkoutInfo,
      productsOrdered,
    };
    console.log(userOrder);
    //['productsOrdered':[{},{}]]
    //[{},{}]
    //const userOrder = Object.create({
    //   shippingInfo,paymentMethod, productsOrdered
    // })
    //const finalOrder = JSON.parse(localStorage.getItem('customerOrder'));

    const token = localStorage.getItem("token");

    if (!token) {
      //redirect
      props.history.push("/");
    }

    const options = {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };
    const req = {
      userOrder,
    };
    // console.log(req);
    axios
      .post("http://localhost:3001/orders/checkout", req, options)
      .then(function (response) {
        console.log(response);
        props.history.push("/ordersubmission");
        return;
      })
      .catch(function (error) {
        console.log(error);
        alert("error checking out");
      });
    //setCustomerOrder()
    //   localStorage.removeItem("shippinginfo");
    //   localStorage.removeItem("shoppingBag");
    //   localStorage.removeItem("paymentmethod");
    //();
    // console.log(paymentMethod);
    console.log(checkoutInfo);
    console.log(productsOrdered);
    console.log(userOrder);

    //setOrder({ ...order, customerOrder });
    //order.push(userOrder);

    //TODO:
    // if (paymentMethod && shippingInfo) {
    //   setDisable(false);
    //   localStorage.removeItem("shippinginfo");
    //   localStorage.removeItem("shoppingBag");
    //   localStorage.removeItem("paymentmethod");
    // } else {
    //   alert("missing information");
    // }
  };
  const order = JSON.parse(localStorage.getItem("shoppingBag")) || [];
  const totalPrice = order.reduce((a, c) => a + c.price * c.bagQty, 0);
  return (
    <div>
      <h4 className={grandclass.h4}>Grand Total</h4>

      <p className={grandclass.p}>${totalPrice}</p>
      <button className={grandclass.button1} onClick={submitOrder}>
        Submit Order
      </button>
      {/* <Link to='/ordersubmission'> disabled={disable} </Link> */}
      <br />
      <Link to="/bag">
        <button className={grandclass.button2}>Back To Shopping Bag</button>
      </Link>
    </div>
  );
};

export default withRouter(GrandTotal);
