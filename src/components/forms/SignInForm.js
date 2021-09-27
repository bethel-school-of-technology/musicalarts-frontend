import signinclass from './SignInForm.module.css';

function SignInForm() {
    return (
        <form className={signinclass.form}>
            <div>
                <input className={signinclass.input} type="text" required id="username" placeholder="Username"/>
            </div>
            <div>
                <input className={signinclass.input} type="text" required id="password" placeholder="Password"/>  
            </div>
            <div>
                <button className={signinclass.button} >Submit</button>
            </div>
        </form>
    );

}

export default SignInForm;