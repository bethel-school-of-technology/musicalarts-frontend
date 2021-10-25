import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import API from '../../utils/API';
import { withRouter } from 'react-router';

const Gallery = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <h2>View Orders</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product's Price</th>
            <th>Quantity</th>
            <th>Buyer's Name</th>
            <th>Buyer's Address</th>
            <th>Buyer's Email</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id}>
              {/* TODO: Figure out how to map through ProductOrdereds in order to get everything */}
              <td>{item.ProductOrdereds.productId}</td>

              <td>{item.totalPrice}</td>
              <td>{item.totalPrice}</td>
              <td>{item.totalPrice}</td>
              <td>
                {item.buyerFirstName} {item.buyerLastName}
              </td>
              <td>
                {item.streetAddress} {item.city},{item.state} {item.zipcode}
              </td>
              <td>{item.buyerEmail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default withRouter(Gallery);
