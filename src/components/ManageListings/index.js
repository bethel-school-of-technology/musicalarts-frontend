import React, { useState, useEffect } from 'react';
import Item from '../Item';
import API from '../../utils/API';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ManageListings = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getListings().then((res) => {
      setInventory(res.data);
    });
  }, []);
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

export default ManageListings;
