import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Container, Input } from "reactstrap";
import "./SignUpForm.css";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  function submitHandler() {
    console.log(user.username);

    API.createUser(user).then((res) => {
      console.log(res);
    });
  }

  return (
    <Container className="col text-center">
      <div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="Input"
            type="text"
            required
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="Input"
            type="password"
            required
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className="Input"
            type="text"
            required
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className="Input"
            type="text"
            required
            id="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="Input"
            type="text"
            required
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            className="Input"
            type="text"
            required
            id="address"
            placeholder="Address"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            className="Input"
            type="text"
            required
            id="phonenumber"
            placeholder="Phone"
          />
        </div>
        <div>
          <Link className="submit" to="/signin" onClick={submitHandler}>
            Submit
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SignUpForm;
