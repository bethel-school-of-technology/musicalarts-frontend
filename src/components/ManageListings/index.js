import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Table, Container } from 'reactstrap';
import EditableRow from '../EditListing/EditableRow';
import ReadOnlyRow from '../EditListing/ReadOnlyRow';

const ManageList = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    productName: '',
    description: '',
    genre: '',
    quantity: '',
    imageUrl: '',
    price: '',
    location: '',
  });

  //get all listings
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
        setProducts(res.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('/signin');
      }
    );
  }, [history]);

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e, product) => {
    e.preventDefault();
    const editedProduct = {
      id: editProductId,
      productName: editFormData.productName,
      description: editFormData.description,
      genre: editFormData.genre,
      quantity: editFormData.quantity,
      imageUrl: editFormData.imageUrl,
      price: editFormData.price,
      location: editFormData.location,
    };
    const newProducts = [...products];
    const i = products.findIndex((product) => product.id === editProductId);
    newProducts[i] = editedProduct;
    setProducts(newProducts);
    setEditProductId(null);

    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/signin');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `http://localhost:3001/products/${editProductId}`;

    axios.put(url, editedProduct, options).then(
      (res) => {
        alert('Listing successfully updated');
        history.push(`/gallery`);
        console.log(res.data);
      },
      (err) => {
        console.error(err);
        // localStorage.removeItem('token');
        // history.push('/signin');
      }
    );
  };

  const handleEditClick = (e, product) => {
    e.preventDefault();
    setEditProductId(product.id);
    const formValues = {
      productName: product.productName,
      description: product.description,
      genre: product.genre,
      quantity: product.quantity,
      imageUrl: product.imageUrl,
      price: product.price,
      location: product.location,
    };
    setEditFormData(formValues);
  };

  //cancel edit
  const handleCancelClick = () => {
    setEditProductId(null);
  };

  const deleteListing = (productId) => {
    const newProducts = [...products];
    const i = products.findIndex((product) => product.id === productId);
    newProducts.splice(i, 1);
    setProducts(newProducts);
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/signin');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `http://localhost:3001/products/${productId}`;

    axios.delete(url, options).then(
      (res) => {
        alert('Listing was successfully deleted!');
        //history.push('/');
        console.log(res.data);
      },
      (err) => {
        console.error(err);
        localStorage.removeItem('token');
        history.push('/signin');
      }
    );
  };

  return (
    <div>
      <Container className='mt-3'>
        <h2 className='text-center' style={{ fontSize: '50px' }}>
          Manage Listings
        </h2>
        <form onSubmit={handleEditFormSubmit}>
          <Table className='mt-3' bordered>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Quantity</th>
                <th>Image Url</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <>
                  {editProductId === product.id ? (
                    <EditableRow
                      key={editProductId}
                      editFormData={editFormData}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={product.id}
                      product={product}
                      deleteListing={deleteListing}
                      handleEditClick={handleEditClick}
                      //handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </Table>
        </form>
      </Container>
    </div>
  );
};

export default withRouter(ManageList);
