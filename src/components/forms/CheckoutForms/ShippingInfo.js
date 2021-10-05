import React, { useState } from "react";
import API from "../../../utils/API";
//import submitHandler from "../CheckoutForms/GrandTotal";

import shippingclass from "./ShippingInfo.module.css";

const ShippingInfoForm = () => {
  const [order, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  function submitHandler() {
    console.log(order.firstName);

    API.createShippingInfo(order).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <h4 className={shippingclass.h4}>Shipping Info</h4>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...order, firstName: e.target.value })
          }
          className={shippingclass.input}
          type="text"
          required
          id="firstname"
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...order, LastName: e.target.value })
          }
          className={shippingclass.input}
          type="text"
          required
          id="lastname"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setShippingInfo({ ...order, email: e.target.value })}
          className={shippingclass.input}
          type="text"
          required
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...order, address: e.target.value })
          }
          className={shippingclass.input}
          type="text"
          required
          id="address"
          placeholder="Street Address"
        />
      </div>
      <div>
        <input
          onChange={(e) => setShippingInfo({ ...order, city: e.target.value })}
          className={shippingclass.input}
          type="text"
          required
          id="city"
          placeholder="City"
        />
      </div>
      <div>
        <input
          onChange={(e) => setShippingInfo({ ...order, state: e.target.value })}
          className={shippingclass.input}
          type="text"
          required
          id="state"
          placeholder="State"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...order, zipCode: e.target.value })
          }
          className={shippingclass.input}
          type="number"
          required
          id="zipcode"
          placeholder="Zip Code"
        />
      </div>
      <div>
        <button className={shippingclass.button} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
