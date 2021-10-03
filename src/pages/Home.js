// import React, { useState } from "react";
// import SignUp from "../pages/SignUp";
import homeclass from "./Home.module.css";

const HomePage = () => {
  // const [modalButton, setModalButton] = useState(false);

  return (
    <div>
      <h1 className={homeclass.h1}>Welcome to MusicalArts®!</h1>
      <p className={homeclass.p}>
        <i>
          The World's exclusive e-commerce platform for the Christian Artists
          and Musicians!
        </i>
      </p>
      <button className={homeclass.button1}>Create Account</button>
      <br />
      <button className={homeclass.button2}>View Listings</button>
    </div>
  );
};

export default HomePage;
