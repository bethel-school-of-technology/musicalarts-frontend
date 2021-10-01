import React, { useState } from "react";
import API from "../../utils/API";

import signupclass from "./SignUpForm.module.css";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function submitHandler() {
    console.log(username);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(address);
    console.log(phone);

    API.createUser({
      username,
      password,
      firstName,
      lastName,
      email,
      address,
      phone,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className={signupclass.form}>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="password"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="firstname"
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setLastName(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="lastname"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          onChange={(e) => setAddress(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="address"
          placeholder="Address"
        />
      </div>
      <div>
        <input
          onChange={(e) => setPhone(e.target.value)}
          className={signupclass.input}
          type="text"
          required
          id="phone"
          placeholder="Phone"
        />
      </div>
      <div>
        <button className={signupclass.button} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
