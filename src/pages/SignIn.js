import { withRouter } from "react-router";
import SignInForm from "../components/forms/SignInForm";
import "./SignIn.css";

function SignInPage() {
  return (
    <section className="signin">
      {/*<h1 className="h1">Sign In</h1>*/}
      <SignInForm />
    </section>
  );
}

export default withRouter(SignInPage);
