import React, { useState } from "react";
import API from "../../utils/API";

import signupclass from "./SignUpForm.module.css";

function SignUpForm() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  function submitHandler() {
    console.log(user.userName);

    API.createUser(user).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className={signupclass.form}>
      <div>
        <input
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className={signupclass.input}
          type="password"
          required
          id="password"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="firstname"
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="lastname"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="address"
          placeholder="Address"
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          className={signupclass.input}
          type="text"
          required
          id="phonenumber"
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
