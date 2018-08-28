import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, Image, Button, FormGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap";
import logo from './Assets/AffiaMmutaLogo.png';
import search from './Assets/Search.png';
import logIn from './Assets/LogIn.png';
import market from './Assets/Market.png';
import './SignUpPage.css';
import './CustomNavbar.css';


 class CustomNavbar extends Component {
    logOut = event => {
      sessionStorage.removeItem("user")
      this.props.history.push("/login")
    }


  render() {
    return (
      // <Navbar default collapseOnSelect className="general-navbar">
      //   <Navbar.Header>
      //     <Link to="/">
      //       <Image src={logo} alt='Logo' className="image" />
      //     </Link>
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //     <Navbar.Collapse>
      //       <Nav pullRight className="general-navbar-nav" >
      //         <NavItem>
      //           <Link to="/Market">
      //           <Button className="btn btn-success buttons buttons-shadow-market" type="submit">
      //           <Image src={market} alt='Logo' className="market-image" />
      //             Market
      //           </Button>
      //           </Link>
      //         </NavItem>
      //         <NavItem>
      //           <Link to="/Log-in">
      //             <Button className="btn btn-success buttons buttons-shadow-login" id="login-button" type="submit">
      //             <Image src={logIn} alt='Logo' className="log-in-image" />
      //               Login
      //             </Button>
      //           </Link>
      //         </NavItem>
      //         <Navbar.Form>
      //         <FormGroup>
      //           <FormControl type="text" placeholder="I am looking for..." className="search" />
      //         <Button type="submit" className= "button">
      //           <Image src={search} alt='Logo'/>
      //         </Button>
      //         </FormGroup>
      //         <Link to="/Cart">
      //           <Button type="submit" className= "cart">
      //             <Image src={cart} alt='Logo' className="cart-img" />
      //           </Button>
      //         </Link>
      //         </Navbar.Form>
      //       </Nav>
      //     </Navbar.Collapse>
      // </Navbar>
      
      
      <Navbar default collapseOnSelect className="general-navbar">
        <Navbar.Header>
          <Link to="/">
            <Image src={logo} alt='Logo' className="image" />
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="general-navbar-nav" >
              <NavItem>
                <Link to="/Market">
                <Button className="btn btn-success buttons buttons-shadow-market" type="submit">
                <Image src={market} alt='Logo' className="market-image" />
                  Market
                </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Log-in">
                  <Button className="btn btn-success buttons buttons-shadow-login" id="login-button" type="submit">
                  <Image src={logIn} alt='Logo' className="log-in-image" />
                    Library
                  </Button>
                </Link>
              </NavItem>
              <Navbar.Form>
              <FormGroup>
                <FormControl type="text" placeholder="I am looking for..." className="search" />
              <Button type="submit" className= "button">
                <Image src={search} alt='Logo'/>
              </Button>
              </FormGroup>
              <DropdownButton 
                bsStyle
                title={<Image src={logIn} alt='Logo'/>}
                id = "dropdown-user"
                noCaret
                >
                  <MenuItem eventKey="1"onClick={this.logOut}>Log out</MenuItem>
                </DropdownButton>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>        
    );
  }
}
export default withRouter(CustomNavbar);