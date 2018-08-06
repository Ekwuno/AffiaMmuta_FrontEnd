import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Button, Glyphicon } from "react-bootstrap";
import logo from './Assets/AffiaMmutaLogo.png';

 class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
         <Navbar.Header>
          <Navbar.Brand>
              <img src={logo} alt='Logo' height= "auto" width= "200px" />
              {/* <Image src="/thumbnail.png" responsive />; */}
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
                  <Nav pullRight bsStyle="pills" activeKey={1}>
                    <NavItem eventKey={1}>
                    Martket Place
                    </NavItem>
                    <NavItem eventKey={2}>
                    Login
                    </NavItem>
                    {/* <FieldGroup
                        id="formControlsText"
                        type="text"
                        placeholder="Enter text" /> */}
                        <input type = "Text" placeholder= "Search" />
                        <Button>
        <Glyphicon glyph="camera" />
      </Button>
                    </Nav>
         </Navbar.Collapse>
      </Navbar>
               
    );
  }
}
export default CustomNavbar;