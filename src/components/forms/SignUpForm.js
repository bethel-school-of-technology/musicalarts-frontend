import signupclass from './SignUpForm.module.css';

function SignUpForm() {
    return (
        <form className={signupclass.form}>
            <div>
                <input className={signupclass.input} type="text" required id="username" placeholder="Username"/>
            </div>
            <div>
                <input className={signupclass.input} type="text" required id="password" placeholder="Password"/>  
            </div>
            <div>
                <input className={signupclass.input} type="text" required id="name" placeholder="Name"/>  
            </div>
            <div>
                <input className={signupclass.input} type="text" required id="email" placeholder="Email"/>  
            </div>
            <div>
                <input className={signupclass.input} type="text" required id="phone" placeholder="Phone"/>  
            </div>
            <div>
                <button className={signupclass.button} >Submit</button>
            </div>
        </form>
    );
    
}

export default SignUpForm;