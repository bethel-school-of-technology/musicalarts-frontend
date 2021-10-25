import React from 'react';
import { Button } from 'reactstrap';

const EditableRow = ({
  handleCancelClick,
  editFormData,
  handleEditFormChange,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new product name...'
          name='productName'
          value={editFormData.productName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new description name...'
          name='description'
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new genre name...'
          name='genre'
          value={editFormData.genre}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          name='quantity'
          value={editFormData.quantity}
          disabled
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new imageUrl...'
          name='imageUrl'
          value={editFormData.imageUrl}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new price...'
          name='price'
          value={editFormData.price}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter new location...'
          name='location'
          value={editFormData.location}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Button type='submit'>Save</Button>
        <Button color='warning' type='button' onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
