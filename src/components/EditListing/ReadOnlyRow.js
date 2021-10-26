import React from 'react';
import { Button } from 'reactstrap';
import DeleteForeverOutlined from '@material-ui/icons/DeleteForeverOutlined';

const ReadOnlyRow = ({ listing, handleEditClick, deleteListing }) => {
  return (
    <tr key={listing.id}>
      <td>{listing.productName}</td>
      <td>{listing.description}</td>
      <td>{listing.genre}</td>
      <td>{listing.quantity}</td>
      {(listing.imageUrl === '') | (listing.imageUrl === null) ? (
        <td>no image url</td>
      ) : (
        <td>{listing.imageUrl}</td>
      )}

      <td>{listing.price}</td>
      <td>{listing.location}</td>
      <td>
        <Button
          className='btn btn-sm'
          outline
          type='button'
          onClick={(e) => handleEditClick(e, listing)}
        >
          edit
        </Button>{' '}
        <hr />
        <Button
          className='btn btn-sm'
          color='danger'
          outline
          type='button'
          onClick={() => deleteListing(listing.id)}
        >
          <DeleteForeverOutlined />
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
