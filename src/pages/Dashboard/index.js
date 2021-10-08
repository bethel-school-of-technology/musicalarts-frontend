import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import CreateListing from "../../components/CreateListing";
import UpdateListing from "../../components/UpdateListing";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [modalButton, setModalButton] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      //redirect
      props.history.push("/");
    }

    const options = {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };
    const url = `http://localhost:3001/user/dashboard`;
    axios.get(url, options).then(
      (res) => {
        console.log(res);
        setSeller(res.data);
      },
      (err) => {
        localStorage.removeItem("token");
        props.history.push("/signin");
        console.error(err);
      }
    );
  }, [props.token, props.history]);

  return (
    <div>
      <main>
        {/* When the model's/backend are set up integrate it so that the user's name shows up */}
        <h2>{seller.firstName}'s Dashboard</h2>
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
        <Link to="/manage-listings">
          <button>Manage everything</button>
        </Link>
      </main>
    </div>
  );
};

export default withRouter(Dashboard);
