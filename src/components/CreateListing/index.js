import React, { useState } from 'react';
import { withRouter } from 'react-router';
//import './CreateListing.css';
import axios from 'axios';
//import API from '../../utils/API';

//TODO: add history once you have axios up and running!!
const CreateListing = (props) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState([]);

  // const submitListing = () => {
  //   API.createListing(inventory).then((res) => {
  //     console.log(res);
  //   });
  // };

  const createListing = () => {
    if (
      productName !== '' &&
      description !== '' &&
      price !== '' &&
      genre !== '' &&
      location !== '' &&
      category !== ''
    ) {
      const req = {
        productName,
        description,
        price,
        genre,
        location,
        category,
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
      axios.post('http://localhost:3001/products', req, options).then(
        (res) => {
          console.log(res.data);
          props.history.push('/gallery');
        },
        (err) => {
          //TODO: figure out what we will be naming the token
          console.error(err);
          //localStorage.removeItem('token');
          //props.history.push('/signin');
        }
      );
    }
  };

  return (
    <div>
      <div>
        <h2>Create A New Listing: </h2>
        <input
          type='text'
          placeholder='Listing Name'
          name='productName'
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Genre'
          name='genre'
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          placeholder='Price($)'
          name='price'
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type='text'
          placeholder='Location'
          name='location'
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>
          Pick your listing type:
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value='music'>music</option>
            <option value='art'>art</option>
          </select>
        </label>
        <button onClick={createListing} type='submit'>
          Create Listing
        </button>
      </div>
    </div>
  );
};

export default withRouter(CreateListing);
