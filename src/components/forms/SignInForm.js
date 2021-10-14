import axios from 'axios';
import { useState } from 'react';
import { withRouter } from 'react-router';

import signinclass from './SignInForm.module.css';

function SignInForm({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submitHandler() {
    console.log(username);
    console.log(password);
    if (username !== '' && password !== '') {
      const req = {
        username,
        password,
      };
      axios.post('http://localhost:3001/user/signin', req).then(
        (result) => {
          const token = result.data.jwt;
          localStorage.setItem('token', token);
          history.push(`/dashboard`);
          console.log(result.data);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  return (
    <div className={signinclass.form}>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className={signinclass.input}
          type='text'
          required
          id='username'
          placeholder='Username'
        />
      </div>
      <div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={signinclass.input}
          type='password'
          required
          id='password'
          placeholder='Password'
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

export default withRouter(SignInForm);
