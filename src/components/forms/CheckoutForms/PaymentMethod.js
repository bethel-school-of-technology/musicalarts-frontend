import React, { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Button, Container, Input } from "reactstrap";

import "./CheckoutPage.css";

const PaymentMethodForm = () => {
  const [paymentmethod, setPaymentMethod] = useState({
    nameOnCard: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCvv: "",
  });

  const [payment, setPayment] = useLocalStorage("paymentmethod", []);
  const [disable, setDisable] = useState(false);
  const submitPaymentMethod = () => {
    if (
      paymentmethod.nameOnCard !== "" &&
      paymentmethod.cardNumber !== "" &&
      paymentmethod.cardExpirationDate !== "" &&
      paymentmethod.cardCvv !== ""
    ) {
      setPayment(...payment, paymentmethod);
      setDisable(true);
      alert("Successful!");
    } else {
      alert("missing fields");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <div>
        <div>
          <h4>Payment Method</h4>
        </div>
        <div>
          <Input
            onChange={(e) =>
              setPaymentMethod({ ...paymentmethod, nameOnCard: e.target.value })
            }
            className="col m-4 Input"
            type="text"
            required
            id="nameoncard"
            placeholder="Name On Card"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setPaymentMethod({ ...paymentmethod, cardNumber: e.target.value })
            }
            className="col m-4 Input"
            type="number"
            required
            id="cardnumber"
            placeholder="Credit or Debit Card Number"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setPaymentMethod({
                ...paymentmethod,
                cardExpirationDate: e.target.value,
              })
            }
            className="col m-4 Input"
            type="text"
            required
            id="expirationdate"
            placeholder="Exp. (MM/YY)"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setPaymentMethod({ ...paymentmethod, cardCvv: e.target.value })
            }
            className="col m-4 Input"
            type="number"
            required
            id="cvv"
            placeholder="CVV"
          />
        </div>
        <div className="col text-center">
          <Button
            disabled={disable}
            className="mb-4 button"
            onClick={submitPaymentMethod}
          >
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PaymentMethodForm;
