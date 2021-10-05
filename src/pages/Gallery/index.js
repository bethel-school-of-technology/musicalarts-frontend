import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Item from '../../components/Item';
import API from '../../utils/API';
import { withRouter } from 'react-router';

const Gallery = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getListings().then((res) => {
      setInventory(res.data);
    });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/items')
  //     .then((res) => {
  //       console.log(res);
  //       setInventory(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <h2>Welcome to the Gallery of galleries</h2>
      <div>
        {inventory.map((item) => (
          <Container key={item.id}>
            <Item item={item} />
          </Container>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Gallery);
