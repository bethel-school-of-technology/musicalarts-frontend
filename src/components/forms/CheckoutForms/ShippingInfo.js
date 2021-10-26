import React, { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import useLocalStorage from "../../../hooks/useLocalStorage";
import "./CheckoutPage.css";

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
  const [shipping, setShipping] = useLocalStorage("shippinginfo", []);
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
      setShipping(...shipping, shippinginfo);
      alert("Successful");
      setDisable(true);
    } else {
      alert("missing fields");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <div>
        <div className="col">
          <h4>Shipping Info</h4>
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({
                ...shippinginfo,
                buyerFirstName: e.target.value,
              })
            }
            className="col m-4 Input"
            type="text"
            required
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({
                ...shippinginfo,
                buyerLastName: e.target.value,
              })
            }
            className="col m-4 Input"
            type="text"
            required
            id="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({ ...shippinginfo, buyerEmail: e.target.value })
            }
            className="col m-4 Input"
            type="text"
            required
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({
                ...shippinginfo,
                buyerPhoneNumber: e.target.value,
              })
            }
            className="col m-4 Input"
            type="text"
            required
            id="phonenumber"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({
                ...shippinginfo,
                streetAddress: e.target.value,
              })
            }
            className="col m-4 Input"
            type="text"
            required
            id="address"
            placeholder="Street Address"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({ ...shippinginfo, city: e.target.value })
            }
            className="col m-4 Input"
            type="text"
            required
            id="city"
            placeholder="City"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({ ...shippinginfo, state: e.target.value })
            }
            className="col m-4 Input"
            type="text"
            required
            id="state"
            placeholder="State"
          />
        </div>
        <div>
          <Input
            onChange={(e) =>
              setShippingInfo({ ...shippinginfo, zipcode: e.target.value })
            }
            className="col m-4 Input"
            type="number"
            required
            id="zipcode"
            placeholder="ZipCode"
          />
        </div>
        <div className="col text-center">
          <Button
            disabled={disable}
            className="mb-4 button"
            onClick={submitShippingInfo}
          >
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ShippingInfoForm;
