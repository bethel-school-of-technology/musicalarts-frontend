import { Link } from "react-router-dom";
import homeclass from "./Home.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={homeclass.h1}>Welcome to MusicalArts®!</h1>
      <p className={homeclass.p}>
        <i>
          The World's exclusive e-commerce platform for the Christian Artists
          and Musicians!
        </i>
      </p>
      <Link to="/signup">
        <button className={homeclass.button1}>Create Account</button>
      </Link>
      <br />
      <Link to="/gallery">
        <button className={homeclass.button2}>View Listings</button>
      </Link>
    </div>
  );
};

export default HomePage;
