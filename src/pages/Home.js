import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
//import Carol from '../components/Carousel';
import './Home.css';

const HomePage = (props) => {
  return (
    <Container className='col text-center'>
      <h1 id='home-text' className='h1 col text-center'>
        MusicalArts®
      </h1>
      <p>
        <i>
          The World's exclusive e-commerce platform for the Christian Artists
          and Musicians!
        </i>
      </p>

      {/* <Carol /> */}

      <Link to='/signup' className='button1'>
        Create Account
      </Link>
      <br />
      <Link className='button2' to='/gallery'>
        View Listings
      </Link>
    </Container>
  );
};

export default HomePage;
