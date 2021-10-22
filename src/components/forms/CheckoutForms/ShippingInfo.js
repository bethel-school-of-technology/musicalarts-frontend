import React, { useState } from "react";
//import API from "../../../utils/API";
import useLocalStorage from "../../../hooks/useLocalStorage";
import shippingclass from "./ShippingInfo.module.css";

const ShippingInfoForm = () => {
  const [shippinginfo, setShippingInfo] = useState({
    buyerFirstName: "",
    buyerLastName: "",
    buyerEmail: "",
    buyerPhoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [shipping, setShipping] = useLocalStorage("shippinginfo", {});
  const [disable, setDisable] = useState(false);
  const submitShippingInfo = () => {
    if (
      shippinginfo.buyerFirstName !== "" &&
      shippinginfo.buyerLastName !== "" &&
      shippinginfo.buyerEmail !== "" &&
      shippinginfo.buyerPhoneNumber !== "" &&
      shippinginfo.streetAddress !== "" &&
      shippinginfo.city !== "" &&
      shippinginfo.state !== "" &&
      shippinginfo.zipcode !== ""
    ) {
      setShipping({ ...shipping, shippinginfo });
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
      <h4 className={shippingclass.h4}>Shipping Info</h4>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, buyerFirstName: e.target.value })
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
            setShippingInfo({ ...shippinginfo, buyerLastName: e.target.value })
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
            setShippingInfo({ ...shippinginfo, buyerEmail: e.target.value })
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
            setShippingInfo({
              ...shippinginfo,
              buyerPhoneNumber: e.target.value,
            })
          }
          className={shippingclass.input}
          type="text"
          required
          id="phonenumber"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setShippingInfo({ ...shippinginfo, streetAddress: e.target.value })
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
            setShippingInfo({ ...shippinginfo, zipcode: e.target.value })
          }
          className={shippingclass.input}
          type="number"
          required
          id="zipcode"
          placeholder="Zip Code"
        />
      </div>
      <div>
        <button
          disabled={disable}
          className={shippingclass.button}
          onClick={submitShippingInfo}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
