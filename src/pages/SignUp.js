import SignUpForm from '../components/forms/SignUpForm';
import signupclass from './SignUp.module.css';

function SignUpPage() {
    return (
        <section>
            <h1 className={signupclass.h1}>Sign Up</h1>
            <SignUpForm />
        </section>
        
    );
}

export default SignUpPage;