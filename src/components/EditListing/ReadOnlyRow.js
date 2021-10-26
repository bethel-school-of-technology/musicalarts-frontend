import React from 'react';
import { Button } from 'reactstrap';

const ReadOnlyRow = ({ listing, handleEditClick, deleteListing }) => {
  return (
    <tr key={listing.id}>
      <td>{listing.productName}</td>
      <td>{listing.description}</td>
      <td>{listing.genre}</td>
      <td>{listing.quantity}</td>
      <td>{listing.imageUrl}</td>
      <td>{listing.price}</td>
      <td>{listing.location}</td>
      <td>
        <Button type='button' onClick={(e) => handleEditClick(e, listing)}>
          edit
        </Button>{' '}
        |
        <Button
          color='danger'
          type='button'
          onClick={() => deleteListing(listing.id)}
        >
          delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
