import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image, Button, FormGroup, FormControl } from "react-bootstrap";
import logo from './Assets/AffiaMmutaLogo.png';
import cart from './Assets/Cart.png';
import './SignUpPage.css';
import './CustomNavbar.css';


 class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Link to="/">
            <Image src={logo} alt='Logo' className="image" />
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav" >
              <NavItem>
                <Link to="/Market">
                <Button className="btn btn-success theButton" type="submit">Market</Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Log-in">
                  <Button className="btn btn-success theButton" id="login-button" type="submit">Login</Button>
                </Link>
              </NavItem>
              <Navbar.Form>
              <FormGroup>
                <FormControl type="text" placeholder="I am looking for..." className="search" />
              </FormGroup>{' '}
              <Button type="submit" className= "button">
              <i class="fas fa-search"></i>
              </Button>
              <Link to="/Cart">
                <Button type="submit" className= "cart">
                  <Image src={cart} alt='Logo' className="cart-img" />
                </Button>
              </Link>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
               
    );
  }
}
export default CustomNavbar;