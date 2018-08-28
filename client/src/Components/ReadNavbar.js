import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Image,  NavItem, Button } from "react-bootstrap";
import './ReadNavbar.css';
import library from './Assets/LibraryLogo.png';
import cancel from './Assets/Cancel.png';

export default class ReadNavbar extends Component {
  render() {
    return (
        <Navbar className="read-navbar">
            <Nav>
                <NavItem className="read-header-content-positon">
                    <Button className="read-book-contents-btn" type="submit">
                    <Image src={library} alt='Logo' className="library-in-image" />
                        Content
                    </Button>
                </NavItem>
                <NavItem>
                        <h5>The title of the book</h5>
                </NavItem>
                <NavItem className="nav-cancel">
                    <Link to="/library">
                    <Button className="read-book-close" type="submit">
                        Close
                        <Image src={cancel} alt="cancel" />
                    </Button>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
   );
  }
}