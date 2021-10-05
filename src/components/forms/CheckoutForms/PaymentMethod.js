import React, { useState } from "react";
import API from "../../../utils/API";
//import submitHandler from '../CheckoutForms/GrandTotal';

import paymentclass from "./PaymentMethod.module.css";

const PaymentMethodForm = () => {
  const [order, setPaymentMethod] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    phoneNumber: "",
  });

  function submitHandler() {
    console.log(order.phoneNumber);

    API.createPaymentMethod(order).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <h4 className={paymentclass.h4}>Payment Method</h4>

      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...order, cardNumber: e.target.value })
          }
          className={paymentclass.input}
          type="number"
          required
          id="cardnumber"
          placeholder="Credit or Debit Card Number"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...order, expirationDate: e.target.value })
          }
          className={paymentclass.input}
          type="date"
          required
          id="expirationdate"
          placeholder="Exp. (MM/YY)"
        />
      </div>
      <div>
        <input
          onChange={(e) => setPaymentMethod({ ...order, cvv: e.target.value })}
          className={paymentclass.input}
          type="number"
          required
          id="cvv"
          placeholder="CVV"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...order, phoneNumber: e.target.value })
          }
          className={paymentclass.input}
          type="text"
          required
          id="phonenumber"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <button className={paymentclass.button} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
