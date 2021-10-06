import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import CreateListing from '../../components/CreateListing';
import UpdateListing from '../../components/UpdateListing';
import './SellerDashboard.css';

/*import React, { useState, useEffect } from 'react';*/

//I had to comment that import for the time being. It was giving me warning messages. After I commented it out, it compiled successfully! Once you start to actually use this import, you can uncomment them. -Ben Von Achen :)

const SellerDashboard = ({ history }) => {
  const [modalButton, setModalButton] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);
  const [seller, setSeller] = useState([]);
  let { sellerId } = useParams();

  useEffect(() => {
    const url = `http://localhost:3001/users/${sellerId}`;
    axios.get(url).then(
      (res) => {
        console.log(res);
        setSeller(res.data);
      },
      (err) => {
        history.push('/');
      }
    );
  }, [sellerId, history]);

  return (
    <div>
      <main>
        {/* When the model's/backend are set up integrate it so that the user's name shows up */}
        <h2>{seller.firstName} Dashboard</h2>
        <p>username: {seller.username} </p>
        <p>first name: {seller.firstName}</p>
        <p>last name: {seller.lastName} </p>
        <p>email address: {seller.email}</p>
        <p>account type: Seller</p>

        <button onClick={() => setModalButton(true)}>Create New Listing</button>
        {/* TODO:  Put this in manage listings component */}
        {/* <button onClick={() => setUpdateButton(true)}>Manage Listings</button> */}

        <button>Update Account</button>
        <CreateListing trigger={modalButton} setTrigger={setModalButton} />
        {/* <Modal trigger={modalButton} setTrigger={setModalButton}>
        <h2>this works right?</h2>
      </Modal> */}
        {/* TODO:  Put this in manage listings component */}
        <UpdateListing
          triggerUpdate={updateButton}
          setTriggerUpdate={setUpdateButton}
        />
        <Link to='/manage-listings'>
          <button>Manage everything</button>
        </Link>
      </main>
    </div>
  );
};

export default withRouter(SellerDashboard);
