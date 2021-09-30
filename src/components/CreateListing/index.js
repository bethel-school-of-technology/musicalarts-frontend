import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './CreateListing.css';

//TODO: add history once you have axios up and running!!
const CreateListing = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');
  // const [musicType, setMusicType] = useState(false);
  // const [artType, setArtType] = useState(false);

  const createListing = (e) => {
    e.preventDefault();
    // if (
    //   title !== '' &&
    //   description !== '' &&
    //   price !== '' &&
    //   genre !== '' &&
    //   location !== ''
    // ) {
    //   const req = {
    //     title,
    //     description,
    //     price,
    //     genre,
    //     location,
    //   };

    //   const token = localStorage.getItem('myJWT')

    //   if(!token) {
    //     //redirect
    //     history.push('/login')
    //   }

    //   const options = {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   }
    //   axios.post('http://localhost:3001/item', req, options).then((res) => {
    //     console.log(res.data);
    //     history.push('/gallery');
    //   }, err => {
    //     //TODO: figure out what we will be naming the token
    //     localStorage.removeItem('token?')
    //     history.push('/signin')
    //   });
    // }
  };

  return props.trigger ? (
    <div className='modal'>
      <div className='inner-modal'>
        <h2>Create A New Listing</h2>
        <form onSubmit={createListing}>
          <h2>Create a post: </h2>
          <input
            type='text'
            placeholder='Title'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
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
          <p>Will you be uploading Music or Art?:</p>
          <input type='checkbox' id='music' name='music' />
          <label for='musicType'>Music</label>
          <input type='checkbox' id='artType' name='artType' />
          <label for='artType'>Art</label>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            close
          </button>
          <button type='submit'>Create Listing</button>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default withRouter(CreateListing);
