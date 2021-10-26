import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router";
import { Button, Container, Input } from "reactstrap";
import "./SignInForm.css";

function SignInForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler() {
    console.log(username);
    console.log(password);
    if (username !== "" && password !== "") {
      const req = {
        username,
        password,
      };
      axios.post("http://localhost:3001/user/signin", req).then(
        (result) => {
          const token = result.data.jwt;
          localStorage.setItem("token", token);
          props.history.push(`/gallery`);
          console.log(result.data);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  return (
    <Container className="d-flex shadow-lg rounded justify-content-center">
      <div>
        <h1 className="h1">Sign In</h1>
        <div className="col">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            className="m-4 Input"
            type="text"
            required
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="col">
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className="m-4 Input"
            type="password"
            required
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <Button className="submit" onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default withRouter(SignInForm);
