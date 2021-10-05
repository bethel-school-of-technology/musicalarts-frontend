import { useState } from "react";
import API from "../../utils/API";

import signinclass from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler() {
    console.log(username);
    console.log(password);

    API.getUser({
      username,
      password,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className={signinclass.form}>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className={signinclass.input}
          type="text"
          required
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={signinclass.input}
          type="password"
          required
          id="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button className={signinclass.button} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
