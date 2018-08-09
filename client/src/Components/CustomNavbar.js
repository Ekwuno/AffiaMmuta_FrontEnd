import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image, Button, FormGroup, FormControl } from "react-bootstrap";
import logo from './Assets/AffiaMmutaLogo.png';
import './SignUpPage.css';
import './CustomNavbar.css';


 class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Image src={logo} alt='Logo' className="image" />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav" >
              <NavItem>
                <Button className="btn btn-success theButton" type="submit">Market</Button>
              </NavItem>
              <NavItem>
                <Button className="btn btn-success theButton" id="login-button" type="submit">Login</Button>
              </NavItem>
              <Navbar.Form>
              <FormGroup>
                <FormControl type="text" placeholder="I am looking for..." className="search" />
              </FormGroup>{' '}
              <Button type="submit" className= "button">
                <i class="fas fa-search"></i>
              </Button>
              <Button type="submit" className= "cart">
                <i class="fas fa-shopping-cart"></i>
              </Button>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
               
    );
  }
}
export default CustomNavbar;