import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
//import UserItem from '../UserItem';
//import API from '../../utils/API';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageListings = ({ history }) => {
  const [listing, setListing] = useState([]);

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
    const url = `http://localhost:3001/products/user-listing`;
    axios.get(url, options).then(
      (res) => {
        setListing(res.data);
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
        <Table bordered>
          <thead>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Image Url</th>
              <th>Price</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {listing.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                {item.imageUrl === null || item.imageUrl === '' ? (
                  <td>no image found</td>
                ) : (
                  <td>{item.imageUrl}</td>
                )}

                <td>${item.price}</td>
                <td>
                  <i>Edit</i> | <i>Delete</i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Link to='/gallery'></Link>
    </div>
  );
};

export default withRouter(ManageListings);
