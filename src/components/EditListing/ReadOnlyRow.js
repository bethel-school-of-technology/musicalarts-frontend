import React from 'react';
import { Button } from 'reactstrap';
import DeleteForeverOutlined from '@material-ui/icons/DeleteForeverOutlined';

const ReadOnlyRow = ({ product, handleEditClick, deleteListing }) => {
  return (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{product.description}</td>
      <td>{product.genre}</td>
      <td>{product.quantity}</td>
      {(product.imageUrl === '') | (product.imageUrl === null) ? (
        <td>no image url</td>
      ) : (
        <td>{product.imageUrl}</td>
      )}

      <td>{product.price}</td>
      <td>{product.location}</td>
      <td>
        <Button
          className='btn btn-sm'
          outline
          type='button'
          onClick={(e) => handleEditClick(e, product)}
        >
          edit
        </Button>{' '}
        <hr />
        <Button
          className='btn btn-sm'
          color='danger'
          outline
          type='button'
          onClick={() => deleteListing(product.id)}
        >
          <DeleteForeverOutlined />
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
