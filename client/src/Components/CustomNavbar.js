import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image, Button, Glyphicon } from "react-bootstrap";
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
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Button className="btn btn-success theButton" type="submit">Market Place</Button>
              </NavItem>
              <NavItem eventKey={2} className= "login-button">
                Login
              </NavItem>
                <input type = "Text" placeholder= "Search" className="search-bar" />
                <Glyphicon glyph="camera" className="glyph"/>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
               
    );
  }
}
export default CustomNavbar;