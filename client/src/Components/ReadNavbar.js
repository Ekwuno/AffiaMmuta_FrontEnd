import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Image,  NavItem } from "react-bootstrap";
import './ReadNavbar.css';
import cancel from './Assets/Cancel.png';

export default class ReadNavbar extends Component {
  render() {
    return (
        <Navbar className="read-navbar">
            <Nav>
                <NavItem></NavItem>
                <Nav pullRight className="read-right-navs">
                    <NavItem>
                        <h5>The title of the book</h5>
                    </NavItem>
                    <NavItem className="nav-cancel">
                        <Link to="/library">
                            <Image src={cancel} alt="cancel" />
                        </Link>
                    </NavItem>
                </Nav>
            </Nav>
        </Navbar>
   );
  }
}