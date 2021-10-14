import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router';

//TODO: add history once you have axios up and running!!
const EditListing = ({ history }) => {
  const [listing, setListing] = useState({
    productName: '',
    description: '',
    price: '',
    genre: '',
    location: '',
  });

  let { listingId } = useParams();

  const editListing = () => {
    console.log(listing);

    if (
      listing.productName !== '' &&
      listing.description !== '' &&
      listing.price !== '' &&
      listing.genre !== '' &&
      listing.location !== ''
    ) {
      const req = {
        ...listing,
      };

      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/signin');
      }

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const url = `http://localhost:3001/products/${listing.id}`;

      axios.put(url, req, options).then(
        (res) => {
          history.push(`/${listing.id}`);
          console.log(res.data);
        },
        (err) => {
          localStorage.removeItem('token');
          history.push('/signin');
        }
      );
    }
  };

  //TODO: Create an alert so when you click delete you won't actually delete.
  //An insurance policy in case it is clicked accidentally

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

    const url = `http://localhost:3001/products/${listing.id}`;

    axios.delete(url, options).then(
      (res) => {
        history.push('/');
        console.log(res.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('signin');
      }
    );
  };

  useEffect(() => {
    //Load Listing from the API
    const url = `http://localhost:3000/products/${listingId}`;

    axios.get(url).then(
      (res) => {
        console.log(res);
        setListing(res.data);
      },
      (err) => {
        history.push('/');
      }
    );
  }, [listingId, history]);

  return (
    <div>
      <form>
        <h2>Edit Listing {listing.productName} </h2>
        <input
          type='text'
          name='productName'
          value={listing.productName}
          onChange={(e) => setListing({ ...listing, itemName: e.target.value })}
        />
        <input
          type='text'
          name='description'
          value={listing.description}
          onChange={(e) =>
            setListing({ ...listing, description: e.target.value })
          }
        />
        <input
          type='text'
          name='price'
          value={listing.price}
          onChange={(e) => setListing({ ...listing, price: e.target.value })}
        />
        <input
          type='text'
          name='genre'
          value={listing.genre}
          onChange={(e) => setListing({ ...listing, genre: e.target.value })}
        />
        <input
          type='text'
          name='location'
          value={listing.location}
          onChange={(e) => setListing({ ...listing, location: e.target.value })}
        />
        <button onClick={editListing}>Update</button>
      </form>

      <button onClick={deleteListing}>Delete Listing</button>
    </div>
  );
};

export default withRouter(EditListing);
