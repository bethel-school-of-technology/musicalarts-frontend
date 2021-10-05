import checkoutclass from "./CheckoutForm.module.css";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <div>
      <div>
        <h4>Shipping Info</h4>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="address"
            placeholder="Street Address"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="city"
            placeholder="City"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="state"
            placeholder="State"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="number"
            required
            id="zipcode"
            placeholder="Zip Code"
          />
        </div>
      </div>
      <div>
        <h4>Payment Method</h4>

        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="number"
            required
            id="cardnumber"
            placeholder="Credit or Debit Card Number"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="date"
            required
            id="expirationdate"
            placeholder="Exp. (MM/YY)"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="number"
            required
            id="cvv"
            placeholder="CVV"
          />
        </div>
        <div>
          <input
            //onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={checkoutclass.input}
            type="text"
            required
            id="phonenumber"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <h4>Grand Total</h4>

      {/* <Link to='/'> */}
      <button className={checkoutclass.button1}>Submit Order</button>
      {/* </Link> */}
      <br />
      <Link to="/shoppingbag">
        <button className={checkoutclass.button2}>Back To Shopping Bag</button>
      </Link>
    </div>
  );
};

export default CheckoutForm;
