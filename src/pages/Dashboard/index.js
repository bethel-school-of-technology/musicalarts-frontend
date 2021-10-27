import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouteMatch, withRouter } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import CreateListing from '../../components/CreateListing';
//import CustomerOrders from '../../components/CustomerOrders';
//import EditUser from '../../components/EditUser';
import ManageListings from '../../components/ManageListings';
import UserOrders from '../../components/UserOrders';
import './Dashboard.css';

const Dashboard = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
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
    const url = `http://localhost:3001/user/dashboard`;
    axios.get(url, options).then(
      (res) => {
        let user = {
          firstName: res.data.userInfo.firstName,
          lastName: res.data.userInfo.lastName,
          username: res.data.userInfo.username,
        };
        localStorage.setItem('user', JSON.stringify({ user }));
        setUser(res.data.userInfo);
      },
      (err) => {
        localStorage.removeItem('token');
        props.history.push('/signin');
        console.error(err);
      }
    );
  }, [props.token, props.history]);

  const { path, url } = useRouteMatch();

  return (
    <div>
      <Container fluid className='main text-center'>
        <h2 className='mt-5 font-weight-bold text-uppercase'>
          {user.firstName}'s Dashboard
        </h2>
        <div className='nav pt-3 '>
          <ul>
            <li>
              <Link className='link' to={`${url}`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className='link' to={`${url}/create-listing`}>
                Create Listing
              </Link>
            </li>
            <li>
              <Link className='link' to={`${url}/manage-listings`}>
                Manage Listings
              </Link>
            </li>
            {/* <li>
              <Link className='link' to={`${url}/update-account`}>
                Update Account
              </Link>
            </li> */}
            <li>
              <Link className='link' to={`${url}/user-orders`}>
                View Orders
              </Link>
            </li>
            {/* <li>
              <Link className='link' to={`${url}/customer-orders`}>
                View Customer Orders
              </Link>
            </li> */}
          </ul>
        </div>

        <div className='profile'>
          <h3 style={{ fontSize: '50px' }}>Profile</h3>
          <p>username: {user.username} </p>
          <p>first name: {user.firstName}</p>
          <p>last name: {user.lastName} </p>
          <p>email address: {user.email}</p>
        </div>
      </Container>

      <Switch>
        <Route path={`${path}/create-listing`} component={CreateListing} />
        <Route path={`${path}/manage-listings`} component={ManageListings} />
        {/* <Route path={`${path}/update-account`} component={EditUser} /> */}
        <Route path={`${path}/user-orders`} component={UserOrders} />
        {/* <Route path={`${path}/customer-orders`} component={CustomerOrders} /> */}
      </Switch>
    </div>
  );
};

export default withRouter(Dashboard);
