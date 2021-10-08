import React, { useState } from 'react';
import { useParams, withRouter } from 'react-router';
import './CreateListing.css';
import axios from 'axios';
//import API from '../../utils/API';

//TODO: add history once you have axios up and running!!
const EditListing = (props) => {
  const [listing, setListing] = useState({
    itemName: '',
    description: '',
    price: '',
    genre: '',
    location: '',
  });

  let { listingId } = useParams();

  const editListing = () => {
    if (
      itemName !== '' &&
      description !== '' &&
      price !== '' &&
      genre !== '' &&
      location !== ''
    ) {
      const req = {
        ...listing,
      };

      const token = localStorage.getItem('token');

      if (!token) {
        //redirect
        props.history.push('/');
      }

      const options = {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      };
      const url = `http://localhost:3001/inventory/${listingId}`;
      axios.put(url, req, options).then(
        (res) => {
          console.log(res.data);
          props.history.push('/manage-listings');
        },
        (err) => {
          //TODO: figure out what we will be naming the token
          localStorage.removeItem('token');
          props.history.push('/signin');
        }
      );
    }
  };

  const deleteListing = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      //redirect
      history.push('/login');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `http://localhost:3000/inventory/${listing.id}`;

    axios.delete(url, options).then(
      (result) => {
        history.push('/');
        console.log(result.data);
      },
      (err) => {
        localStorage.removeItem('token');
        history.push('/login');
      }
    );
  };

  useEffect(() => {
    const url = `http://localhost:3000/inventory/${listingId}`;

    axios.get(url).then(
      (result) => {
        console.log(result);
        setListing(result.data);
      },
      (err) => {
        history.push('/');
      }
    );
  }, [listingId, history]);

  return props.trigger ? (
    <div className='modal'>
      <div className='inner-modal'>
        <h2>Edit Listing</h2>
        <form>
          <input
            type='text'
            placeholder='Item Name'
            value={listing.itemName}
            name='itemName'
            onChange={(e) =>
              setListing({
                ...listing,
                itemName: e.target.value,
              })
            }
          />
          <input
            type='text'
            placeholder='Genre'
            name='genre'
            onChange={(e) =>
              setListing({
                ...listing,
                itemName: e.target.value,
              })
            }
          />
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={listing.description}
            onChange={(e) =>
              setListing({
                ...listing,
                description: e.target.value,
              })
            }
          />
          <input
            type='text'
            placeholder='Price($)'
            value={listing.price}
            name='price'
            onChange={(e) =>
              setListing({
                ...listing,
                price: e.target.value,
              })
            }
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            onChange={(e) =>
              setListing({
                ...listing,
                location: e.target.value,
              })
            }
          />
          <p>Will you be uploading Music or Art?:</p>
          <input type='checkbox' id='music' name='music' />
          <label htmlFor='musicType'>Music</label>
          <input type='checkbox' id='artType' name='artType' />
          <label htmlFor='artType'>Art</label>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            close
          </button>
          <button onClick={editListing} type='submit'>
            Create Listing
          </button>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default withRouter(EditListing);
