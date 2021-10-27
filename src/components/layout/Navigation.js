import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { AccountCircleOutlined } from '@material-ui/icons';
import './Navigation.css';
//import malogo from '../../Images/malogo.png';

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const bag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
  const bagCount = bag.reduce((a, c) => a + c.bagQty, 0);

  const history = useHistory();
  const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/signin');
  };
  const SignedIn = () => {
    const token = localStorage.getItem('token');
    return (
      <div id='main-header'>
        <Navbar light expand='xl'>
          <Container>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link to='/'>Home</Link>
                </NavItem>
                <NavItem>
                  <Link to='/about'>About</Link>
                </NavItem>
                <NavItem>
                  <Link to='/gallery'>Gallery</Link>
                </NavItem>

                {!token ? (
                  <>
                    {' '}
                    <NavItem>
                      <Link to='/signin'>SignIn</Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/signup'>SignUp</Link>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <UncontrolledDropdown className='header-down' nav inNavbar>
                      <DropdownToggle nav>
                        <AccountCircleOutlined />
                      </DropdownToggle>
                      <DropdownMenu className='dropdown-menu-right'>
                        <DropdownItem>
                          <Link to='/dashboard'>Dashboard</Link>
                        </DropdownItem>
                        <DropdownItem onClick={signout} className='signout'>
                          Signout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </>
                )}
                <NavItem>
                  <Badge color='primary' badgeContent={bagCount}>
                    <Link to='/bag'>
                      <ShoppingBasketIcon />{' '}
                    </Link>
                  </Badge>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
  return <SignedIn />;
}

export default withRouter(Navigation);
