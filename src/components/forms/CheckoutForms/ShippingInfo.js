import React, { useState } from "react";
//import API from "../../../utils/API";
import useLocalStorage from "../../../hooks/useLocalStorage";
import shippingclass from "./ShippingInfo.module.css";

const ShippingInfoForm = () => {
  const [shippinginfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [shipping, setShipping] = useLocalStorage("shippinginfo", {});

  const submitShippingInfo = () => {
    setShipping({ ...shipping, shippinginfo });
  };

  // function submitShippingInfo() {
  //   console.log(shippinginfo.firstName);

  //   API.createShippingInfo(shippinginfo).then((res) => {
  //     console.log(res);
  //   });

  // }
  return (
    <div>
      <h4 className={shippingclass.h4}>Shipping Info</h4>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, firstName: e.target.value })
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
            setShippingInfo({ ...shippinginfo, lastName: e.target.value })
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
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, email: e.target.value })
          }
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
            setShippingInfo({ ...shippinginfo, address: e.target.value })
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
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, city: e.target.value })
          }
          className={shippingclass.input}
          type="text"
          required
          id="city"
          placeholder="City"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, state: e.target.value })
          }
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
            setShippingInfo({ ...shippinginfo, zipCode: e.target.value })
          }
          className={shippingclass.input}
          type="number"
          required
          id="zipcode"
          placeholder="Zip Code"
        />
      </div>
      <div>
        <button className={shippingclass.button} onClick={submitShippingInfo}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
