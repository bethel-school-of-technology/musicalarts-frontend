import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
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

  return (
    <Container fluid className='text-center'>
      <h2 id='gallery-text' className='mt-5 mb-5'>
        MusicalArts Gallery
      </h2>
      <Row className='justify-content-center'>
        {inventory.map((item) => (
          <Col className='justify-content-center' key={item.id} sm='6'>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default withRouter(Gallery);
