import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { withRouter } from 'react-router';
import axios from 'axios';

const Gallery = ({ history }) => {
  const [orders, setOrders] = useState([]);

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
    const url = `http://localhost:3001/productordered/order-listing`;
    axios.get(url, options).then(
      (res) => {
        setOrders(res.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('/signin');
      }
    );
  }, [history]);

  return (
    <>
      {orders.length === 0 ? (
        <h3 className='text-center'>You have no orders!</h3>
      ) : (
        <>
          <h2 className='mt-3 text-center' style={{ fontSize: '50px' }}>
            View Orders
          </h2>
          <Container>
            <Table bordered>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Date Ordered</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.OrderId}</td>
                    <td>{item.productName}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </>
  );
};

export default withRouter(Gallery);
