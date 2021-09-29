import { useState } from 'react';
import API from '../../utils/API';

import signupclass from './SignUpForm.module.css';

function SignUpForm() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPhone, setUserPhone] = useState("");
    
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

    const handleFirstName = (e) => {
        const { value } = e.target;
       setUserFirstName(value);

       console.log(userFirstName);
    }

    const handleLastName = (e) => {
        const { value } = e.target;
       setUserLastName(value);

       console.log(userLastName);
    }

    const handleEmail = (e) => {
        const { value } = e.target;
       setUserEmail(value);

       console.log(userEmail);
    }

    const handleAddress = (e) => {
        const { value } = e.target;
       setUserAddress(value);

       console.log(userAddress);
    }

    const handlePhone = (e) => {
        const { value } = e.target;
       setUserPhone(value);

       console.log(userPhone);
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log(userName);
        console.log(userPassword);
        console.log(userFirstName);
        console.log(userLastName);
        console.log(userEmail);
        console.log(userAddress);
        console.log(userPhone);

        const userInfo = {
            userName: userName,
            passWord: userPassword,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            address: userAddress,
            phone: userPhone
        }

        API.createUser(userInfo).then(res => {
            console.log(res)
        })

    }

    return (
        <form className={signupclass.form} onSubmit={submitHandler}>
            <div>
                <input onChange={handleUserName} htmlFor='username' className={signupclass.input} type="text" required id="username" placeholder="Username" />
            </div>
            <div>
                <input onChange={handlePassword} htmlFor='password' className={signupclass.input} type="text" required id="password" placeholder="Password" />  
            </div>
            <div>
                <input onChange={handleFirstName} htmlFor='firstname' className={signupclass.input} type="text" required id="firstname" placeholder="First Name" />  
            </div>
            <div>
                <input onChange={handleLastName} htmlFor='lastname' className={signupclass.input} type="text" required id="lastname" placeholder="Last Name" />  
            </div>
            <div>
                <input onChange={handleEmail} htmlFor='email' className={signupclass.input} type="text" required id="email" placeholder="Email" />  
            </div>
            <div>
                <input onChange={handleAddress} htmlFor='address' className={signupclass.input} type="text" required id="address" placeholder="Address" />  
            </div>
            <div>
                <input onChange={handlePhone} htmlFor='phone' className={signupclass.input} type="text" required id="phone" placeholder="Phone" />  
            </div>
            <div>
                <button className={signupclass.button} >Submit</button>
            </div>
        </form>
    );
    
}

export default SignUpForm;