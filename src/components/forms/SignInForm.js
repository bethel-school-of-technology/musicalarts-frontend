import { useState } from 'react';
import API from '../../utils/API';

import signinclass from './SignInForm.module.css';

function SignInForm() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleUserName = (e) => {
        const { value } = e.target;
       setUserName(value);

       console.log(userName);
    }

    const handlePassword = (e) => {
        const { value } = e.target;
       setUserPassword(value);

       console.log(userPassword);
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log(userName);
        console.log(userPassword);

        const userInfo = {
            userName: userName,
            passWord: userPassword
        }
        API.getUser(userInfo).then(res => {
            console.log(res);
        })

    }

    return (
        <form className={signinclass.form} onSubmit={submitHandler}>
            <div>
                <input onChange={handleUserName} htmlFor='username' className={signinclass.input} type="text" required id="username" placeholder="Username" />
            </div>
            <div>
                <input onChange={handlePassword} htmlFor='password' className={signinclass.input} type="text" required id="password" placeholder="Password" />  
            </div>
            <div>
                <button className={signinclass.button} >Submit</button>
            </div>
        </form>
    );

}

export default SignInForm;