import SignInForm from '../components/forms/SignInForm';
import signinclass from './SignIn.module.css';

function SignInPage() {
    return (
        <section>
            <h1 className={signinclass.h1}>Sign In</h1>
            <SignInForm />
        </section>
        
    );
}

export default SignInPage;