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
  const bag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
  const bagCount = bag.reduce((a, c) => a + c.bagQty, 0);

  //const user = JSON.parse(localStorage.getItem('user')) || [];
  //const userExists = !!user;
  // const token = localStorage.getItem('token');
  // const isLoggedIn = !!token;

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

    setIsLoggedIn(token);
  }, []);

  //const bagCount = JSON.parse(localStorage.getItem('shoppingBag'));

  const history = useHistory();
  const signout = () => {
    //localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    history.push('/signin');
  };

  return (
    <header className={navclass.header}>
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
              ShopBag({bagCount})
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
          {!isLoggedIn ? (
            <>
              {' '}
              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
              <li>
                <Link to='/signup'>SignUp</Link>
              </li>
            </>
          ) : (
            <li>
              <UncontrolledDropdown>
                <DropdownToggle caret>Welcome user</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                    <Link to='/dashboard'>Dashboard</Link>
                  </DropdownItem>
                  <DropdownItem onClick={signout}>Signout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
