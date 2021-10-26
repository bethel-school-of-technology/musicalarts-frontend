import React, { useState } from 'react';
import { withRouter } from 'react-router';
//import './CreateListing.css';
import axios from 'axios';
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
//import API from '../../utils/API';

//TODO: add history once you have axios up and running!!
const CreateListing = (props) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
        quantity,
        imageUrl,
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
    alert('Listing Successfully created!');
  };

  return (
    <div>
      <h2 className='text-center'>Create A New Listing: </h2>
      <Container className='mb-2'>
        <Input
          className='mb-2'
          type='text'
          placeholder='Listing Name'
          name='productName'
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          className='mb-2'
          type='text'
          placeholder='Genre'
          name='genre'
          onChange={(e) => setGenre(e.target.value)}
        />
        <Input
          className='mb-2'
          type='text'
          placeholder='Description'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          className='mb-2'
          type='text'
          placeholder='Image Url'
          name='imgUrl'
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Input
          className='mb-2'
          type='number'
          min='0'
          max='10'
          placeholder='Qty'
          name='quantity'
          onChange={(e) => setQuantity(e.target.value)}
        />
        {/* <Input type='number' placeholder='Price (ex. 45.67)' /> */}
        <InputGroup>
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          <Input
            className='mb-2'
            placeholder='Amount'
            min={0}
            max={100}
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            type='number'
            step='1'
          />
          <InputGroupAddon addonType='append'>.00</InputGroupAddon>
        </InputGroup>
        <Input
          type='text'
          placeholder='Location'
          name='location'
          onChange={(e) => setLocation(e.target.value)}
        />
        <div onChange={(e) => setCategory(e.target.value)}>
          <Input type='radio' id='music' value='music' name='category' />
          <label htmlFor='music'>Music</label> <br />
          <Input type='radio' id='art' value='art' name='category' /> 
          <label htmlFor='art'>Art</label>
          <br />
        </div>
        <Button onClick={createListing} type='submit'>
          Create Listing
        </Button>
      </Container>
    </div>
  );
};

export default withRouter(CreateListing);
