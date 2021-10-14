import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router';

//import signupclass from './SignUpForm.module.css';

function EditUser(props) {
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
      user.username !== '' &&
      user.firstName !== '' &&
      user.lastName !== '' &&
      user.email !== '' &&
      user.phoneNumber !== '' &&
      user.address !== ''
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
      const url = `http://localhost:3001/user/${user.id}`;
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

  useEffect(() => {
    //Load Listing from API
    const url = `http://localhost:3001/products/${userId}`;

    axios.get(url).then(
      (res) => {
        console.log(res);
        setUser(res.data);
      },
      (err) => {
        props.history.push('/');
      }
    );
  }, [userId, props.history]);

  return (
    <div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type='text'
          id='username'
          value={user.username}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          type='text'
          required
          id='firstname'
          value={user.firstName}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          type='text'
          required
          id='lastname'
          value={user.lastName}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type='text'
          required
          id='email'
          value={user.email}
        />
      </div>
      <div>
        <input
          onChange={(e) => setUser({ ...user, address: e.target.value })}
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

export default withRouter(EditUser);
