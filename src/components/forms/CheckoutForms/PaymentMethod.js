import React, { useState } from "react";
import API from "../../../utils/API";

import paymentclass from "./PaymentMethod.module.css";

const PaymentMethodForm = () => {
  const [paymentmethod, setPaymentMethod] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    phoneNumber: "",
  });

  function submitPaymentMethod() {
    console.log(paymentmethod.cardNumber);

    API.createPaymentMethod(paymentmethod).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <h4 className={paymentclass.h4}>Payment Method</h4>

      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...paymentmethod, cardNumber: e.target.value })
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
            setPaymentMethod({
              ...paymentmethod,
              expirationDate: e.target.value,
            })
          }
          className={paymentclass.input}
          type="text"
          required
          id="expirationdate"
          placeholder="Exp. (MM/YY)"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...paymentmethod, cvv: e.target.value })
          }
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
            setPaymentMethod({ ...paymentmethod, phoneNumber: e.target.value })
          }
          className={paymentclass.input}
          type="text"
          required
          id="phonenumber"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <button className={paymentclass.button} onClick={submitPaymentMethod}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
