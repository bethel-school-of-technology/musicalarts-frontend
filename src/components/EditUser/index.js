import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import signupclass from './SignUpForm.module.css';

function SignUpForm() {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });
  let { userId } = useParams();
  const editUser = () => {
    if (
      username !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      phoneNumber !== '' &&
      address !== ''
    ) {
      const req = {
        ...user,
      };

      const token = localStorage.getItem('token');

      if (!token) {
        //redirect
        props.history.push('/');
      }

      const options = {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      };
      const url = `http://localhost:3001/user/${userId}`;
      axios.put(url, req, options).then(
        (res) => {
          console.log(res.data);
          props.history.push('/dashboard');
        },
        (err) => {
          //TODO: figure out what we will be naming the token
          localStorage.removeItem('token');
          props.history.push('/signin');
        }
      );
    }
  };

  return (
    <div className={signupclass.form}>
      <div>
        <input
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className={signupclass.input}
          type='text'
          id='username'
          value={user.username}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className={signupclass.input}
          type='text'
          required
          id='firstname'
          value={user.firstName}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className={signupclass.input}
          type='text'
          required
          id='lastname'
          value={user.lastName}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className={signupclass.input}
          type='text'
          required
          id='email'
          value={user.email}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className={signupclass.input}
          type='text'
          required
          id='address'
          value={user.address}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          type='text'
          required
          id='phonenumber'
          value={user.phoneNumber}
        />
      </div>
      <div>
        <button onClick={editUser}>Submit</button>
      </div>
    </div>
  );
}

export default SignUpForm;
