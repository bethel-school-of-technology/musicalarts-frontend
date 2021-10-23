import React, { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
//import API from "../../../utils/API";
import checkoutclass from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const [checkoutinfo, setCheckoutInfo] = useState({
    buyerFirstName: "",
    buyerLastName: "",
    buyerEmail: "",
    buyerPhoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    nameOnCard: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCvv: "",
  });
  const [checkout, setCheckout] = useLocalStorage("checkoutinfo", []);
  const [disable, setDisable] = useState(false);
  const submitCheckoutInfo = () => {
    if (
      checkoutinfo.buyerFirstName !== "" &&
      checkoutinfo.buyerLastName !== "" &&
      checkoutinfo.buyerEmail !== "" &&
      checkoutinfo.buyerPhoneNumber !== "" &&
      checkoutinfo.streetAddress !== "" &&
      checkoutinfo.city !== "" &&
      checkoutinfo.state !== "" &&
      checkoutinfo.zipcode !== "" &&
      checkoutinfo.nameOnCard !== "" &&
      checkoutinfo.cardNumber !== "" &&
      checkoutinfo.cardExpirationDate !== "" &&
      checkoutinfo.cardCvv !== ""
    ) {
      setCheckout(...checkout, checkoutinfo);
      alert("Successful");
      setDisable(true);
    } else {
      alert("missing fields");
    }
  };

  // function submitShippingInfo() {
  //   console.log(shippinginfo.firstName);

  //   API.createShippingInfo(shippinginfo).then((res) => {
  //     console.log(res);
  //   });

  // }
  return (
    <div>
      <h4 className={checkoutclass.h4}>Shipping Info</h4>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, buyerFirstName: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="firstname"
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, buyerLastName: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="lastname"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, buyerEmail: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({
              ...checkoutinfo,
              buyerPhoneNumber: e.target.value,
            })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="phonenumber"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, streetAddress: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="address"
          placeholder="Street Address"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, city: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="city"
          placeholder="City"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, state: e.target.value })
          }
          className={checkoutclass.input}
          type="text"
          required
          id="state"
          placeholder="State"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setCheckoutInfo({ ...checkoutinfo, zipcode: e.target.value })
          }
          className={checkoutclass.input}
          type="number"
          required
          id="zipcode"
          placeholder="Zip Code"
        />
      </div>
      <div>
        <h4 className={checkoutclass.h4}>Payment Method</h4>
        <div>
          <input
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutinfo, nameOnCard: e.target.value })
            }
            className={checkoutclass.input}
            type="text"
            required
            id="nameoncard"
            placeholder="Name On Card"
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutinfo, cardNumber: e.target.value })
            }
            className={checkoutclass.input}
            type="number"
            required
            id="cardnumber"
            placeholder="Credit or Debit Card Number"
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setCheckoutInfo({
                ...checkoutinfo,
                cardExpirationDate: e.target.value,
              })
            }
            className={checkoutclass.input}
            type="text"
            required
            id="expirationdate"
            placeholder="Exp. (MM/YY)"
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutinfo, cardCvv: e.target.value })
            }
            className={checkoutclass.input}
            type="number"
            required
            id="cvv"
            placeholder="CVV"
          />
        </div>
        <div>
          <button
            disabled={disable}
            className={checkoutclass.button}
            onClick={submitCheckoutInfo}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
