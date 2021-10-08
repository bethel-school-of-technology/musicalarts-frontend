import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Item from '../Item';
//import API from '../../utils/API';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageListings = ({ history }) => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/signin');
    }
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `http://localhost:3001/inventory/user-listing`;
    axios.get(url, options).then(
      (res) => {
        setInventory(res.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('/signin');
      }
    );
  }, [history]);

  //TODO: Figure out what needs to be fixed in the backend to get user's listings
  return (
    <div>
      <h2>Manage your listings</h2>
      <div>
        {inventory.map((item) => (
          <Container key={item.id}>
            <Item item={item} />
          </Container>
        ))}
      </div>
      <Link to='/gallery'></Link>
    </div>
  );
};

export default withRouter(ManageListings);
