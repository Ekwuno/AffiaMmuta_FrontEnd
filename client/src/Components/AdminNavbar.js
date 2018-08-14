import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Col, Row, Nav, NavItem, Image, Button, FormGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap";
import './AdminNavbar.css';
import affia from './Assets/AdminLogo.png';
import cartAdmin from './Assets/Cart.png';
import popImage from './Assets/PopImage.png';

export default class AdminNavbar extends Component {
  render() {
    return (
        <div className="nav-admin">
            <Col className="logo-container" >
                <Image src={affia} alt='Logo' className="admin-logo" />
            </Col>
            <Col className="navbar-items">
                <Navbar default className="navbar-main">
                    <Nav pullRight>
                       <Button type="submit" className= "cart  cart-position">
                            <Image src={cartAdmin} alt='Logo' className="cart-img" />
                        </Button>
                        <DropdownButton 
                            bsStyle
                            title={<Image src={popImage} alt='Logo' className="dropdown-admin" />}
                            id="btn-admin-btn"
                            className = "dropdown-position"
                            >
                            <MenuItem eventKey="1">Profile</MenuItem>
                            <MenuItem eventKey="2">Sign Out</MenuItem>
                        </DropdownButton>
                    </Nav>
                </Navbar>
            </Col>
        </div>
    //   <Navbar default collapseOnSelect>
    //     <Navbar.Header>
    //       <Link to="/">
    //         <Image src={logo} alt='Logo' className="image" />
    //       </Link>
    //       <Navbar.Toggle />
    //     </Navbar.Header>
    //       <Navbar.Collapse>
    //         <Nav pullRight className="nav" >
    //           <NavItem>
    //             <Link to="/Market">
    //             <Button className="btn btn-success buttons buttons-shadow-market" type="submit">
    //             <Image src={market} alt='Logo' className="market-image" />
    //               Market
    //             </Button>
    //             </Link>
    //           </NavItem>
    //           <NavItem>
    //             <Link to="/Log-in">
    //               <Button className="btn btn-success buttons buttons-shadow-login" id="login-button" type="submit">
    //               <Image src={logIn} alt='Logo' className="log-in-image" />
    //                 Login
    //               </Button>
    //             </Link>
    //           </NavItem>
    //           <Navbar.Form>
    //           <FormGroup>
    //             <FormControl type="text" placeholder="I am looking for..." className="search" />
    //           </FormGroup>
    //           <Button type="submit" className= "button">
    //             <Image src={search} alt='Logo'/>
    //           </Button>
    //           <Link to="/Cart">
    //             <Button type="submit" className= "cart">
    //               <Image src={cart} alt='Logo' className="cart-img" />
    //             </Button>
    //           </Link>
    //           </Navbar.Form>
    //         </Nav>
    //       </Navbar.Collapse>
    //   </Navbar>
               
    );
  }
}