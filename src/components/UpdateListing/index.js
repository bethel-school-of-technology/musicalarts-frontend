import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './UpdateListing.css';
//import axios from 'axios';
//import API from '../../utils/API';

//TODO: add history once you have axios up and running!!
const UpdateListing = (props) => {
  const [inventory, setInventory] = useState({
    itemName: '',
    description: '',
    price: '',
    genre: '',
    location: '',
  });

  // const submitListing = () => {
  //   API.createListing(inventory).then((res) => {
  //     console.log(res);
  //   });
  // };

  //let { inventoryId } = useParams();

  // const updateListing = (e) => {
  //   e.preventDefault();
  //   console.log(inventory);
  //   if (
  //     props.itemName !== '' &&
  //     props.description !== '' &&
  //     props.price !== '' &&
  //     props.genre !== '' &&
  //     props.location !== ''
  //   ) {
  //     const req = {
  //       ...inventory,
  //     };

  //     const token = localStorage.getItem('myJWT');

  //     if (!token) {
  //       //redirect
  //       props.history.push('/signin');
  //     }

  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     axios.post('http://localhost:3001/inventory', req, options).then(
  //       (res) => {
  //         console.log(res.data);
  //         props.history.push(`/gallery/${props.inventory.id}`);
  //       },
  //       (err) => {
  //         //TODO: figure out what we will be naming the token
  //         localStorage.removeItem('myJWT', token);
  //         props.history.push('/signin');
  //       }
  //     );
  //   }
  // };
  //TODO: Use in manage all listings
  // const deleteListing = () => {
  //   const token = localStorage.getItem('myJWT');
  //   if (!token) {
  //     //redirect
  //     history.push('/signin');
  //   }
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const url = `http://localhost:3001/inventory/${props.inventory.id}`;
  //   axios.delete(url, options).then(
  //     (result) => {
  //       history.push('/');
  //       console.log(result.data);
  //     },
  //     (err) => {
  //       localStorage.removeItem('myJWT');
  //       history.push('/signin');
  //     }
  //   );
  // };

  // useEffect(() => {
  //   //Load single listing from API
  //   const url = `http://localhost:3001/inventory/${inventoryId}`;

  //   axios.get(url).then(
  //     (result) => {
  //       console.log(result);
  //       setInventory(result.data);
  //     },
  //     (err) => {
  //       props.history.push('/home');
  //     }
  //   );
  // }, [inventoryId, props.history]);

  return props.triggerUpdate ? (
    <div className='modal'>
      <div className='inner-modal'>
        <h2>Update Listing</h2>
        <form>
          <h2>Update {inventory.itemName}: </h2>
          <input
            type='text'
            value={inventory.itemName}
            name='itemName'
            onChange={(e) =>
              setInventory({
                ...inventory,
                itemName: e.target.value,
              })
            }
          />
          <input
            type='text'
            value={inventory.genre}
            name='genre'
            onChange={(e) =>
              setInventory({
                ...inventory,
                genre: e.target.value,
              })
            }
          />
          <input
            type='text'
            value={inventory.description}
            name='description'
            onChange={(e) =>
              setInventory({
                ...inventory,
                description: e.target.value,
              })
            }
          />
          <input
            type='text'
            value={inventory.price}
            name='price'
            onChange={(e) =>
              setInventory({
                ...inventory,
                price: e.target.value,
              })
            }
          />
          <input
            type='text'
            value={inventory.itemName}
            name='location'
            onChange={(e) =>
              setInventory({
                ...inventory,
                itemName: e.target.value,
              })
            }
          />
          <p>Will you be uploading Music or Art?:</p>
          <input type='checkbox' id='music' name='music' />
          <label htmlFor='musicType'>Music</label>
          <input type='checkbox' id='artType' name='artType' />
          <label htmlFor='artType'>Art</label>
          <button
            className='close-btn'
            onClick={() => props.setTriggerUpdate(false)}
          >
            close
          </button>
          <button type='submit'>Update Listing</button>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default withRouter(UpdateListing);
