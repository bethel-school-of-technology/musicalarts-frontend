import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navclass from './Navigation.module.css';

// function getToken() {
//   const token = localStorage.getItem('token');
// }

function Navigation() {
  //const { countCartItems } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    setIsLoggedIn(token);
  }, []);

  const history = useHistory();
  const signout = () => {
    localStorage.removeItem('token');
    history.push('/signin');
  };
  // if(!token) {
  //   return
  // }

  return (
    <header className={navclass.header}>
      {!isLoggedIn ? (
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/signin'>SignIn</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
            <li>
              <Link to='/bag'>
                ShopBag(0)
                {/*{""}
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}*/}
                {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                {/*<FontAwesomeIcon icon={faShoppingCart} />*/}
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/bag'>
                ShopBag(0)
                {/*{""}
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}*/}
                {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                {/*<FontAwesomeIcon icon={faShoppingCart} />*/}
              </Link>
            </li>
            <UncontrolledDropdown>
              <DropdownToggle caret>Welcome user</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>
                  <Link to='/dashboard'>Dashboard</Link>
                </DropdownItem>
                <DropdownItem onClick={signout}>Signout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
