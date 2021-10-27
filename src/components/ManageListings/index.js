import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router';
import { Table, Container } from 'reactstrap';
import EditableRow from '../EditListing/EditableRow';
import ReadOnlyRow from '../EditListing/ReadOnlyRow';

const ManageList = ({ history }) => {
  const [listings, setListings] = useState([]);
  const [editListingId, setEditListingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    productName: '',
    description: '',
    genre: '',
    quantity: '',
    imageUrl: '',
    price: '',
    location: '',
  });
  //let { listingId } = useParams();

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
        setListings(res.data);
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

  //   const editListing = () => {
  //     console.log(listings);

  //     if (
  //       editForm.productName !== '' &&
  //       listings.description !== '' &&
  //       listings.price !== '' &&
  //       listing.genre !== '' &&
  //       listing.location !== ''
  //     ) {
  //       const req = {
  //         ...listing,
  //       };

  //       const token = localStorage.getItem('token');
  //       if (!token) {
  //         history.push('/signin');
  //       }

  //       const options = {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       };
  //       const url = `http://localhost:3001/products/${listing.id}`;

  //       axios.put(url, req, options).then(
  //         (res) => {
  //           history.push(`/${listing.id}`);
  //           console.log(res.data);
  //         },
  //         (err) => {
  //           localStorage.removeItem('token');
  //           history.push('/signin');
  //         }
  //       );
  //     }
  //   };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleEditClick = (e, listing) => {
    e.preventDefault();
    setEditListingId(listing.id);
    const formValues = {
      productName: listing.productName,
      description: listing.description,
      genre: listing.genre,
      quantity: listing.quantity,
      imageUrl: listing.imageUrl,
      price: listing.price,
      location: listing.location,
    };
    setEditFormData(formValues);
  };

  //cancel edit
  const handleCancelClick = () => {
    setEditListingId(null);
  };

  //delete listing
  const deleteListing = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/signin');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `http://localhost:3001/products/${listings.id}`;

    axios.delete(url, options).then(
      (res) => {
        history.push('/');
        console.log(res.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('/signin');
      }
    );
  };

  return (
    <div>
      <Container className='mt-3'>
        <h2 className='text-center'>Manage Listings</h2>
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
              {listings.map((listing) => (
                <>
                  {editListingId === listing.id ? (
                    <EditableRow
                      key={listing.id}
                      editFormData={editFormData}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={listing.id}
                      listing={listing}
                      deleteListing={deleteListing}
                      handleEditClick={handleEditClick}
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

export default ManageList;
