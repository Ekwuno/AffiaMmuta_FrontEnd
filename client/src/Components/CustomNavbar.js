import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, Image, Button, FormGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap";
import logo from './Assets/AffiaMmutaLogo.png';
import search from './Assets/Search.png';
import logIn from './Assets/LogIn.png';
import market from './Assets/Market.png';
import library from './Assets/LibraryLogo.png';
import './SignUpPage.css';
import './CustomNavbar.css';


class CustomNavbar extends Component {
  constructor(props, context) {
    super(props, context);
  this.state = {
    search: "",
    show: false
    }
  }


  logOut = event => {
    sessionStorage.removeItem("user")
    this.props.history.push("/login")
  }

  handleSearch = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  }


  handleShow = () => {
    this.setState({ show: false });
  }

  render() {
    if (sessionStorage.getItem("user")) {
      return (
        <Navbar default collapseOnSelect={this.state.show} className="general-navbar">
          <Navbar.Header>
            <Link to="/">
              <Image src={logo} alt='Logo' className="image" />
            </Link>
            <Navbar.Toggle onClick={this.handleNav}/>
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
                <Link to="/library">
                  <Button className="btn btn-success buttons buttons-shadow-login" id="login-button" type="submit">
                    <Image src={library} alt='Logo' className="library-in-image" />
                    Library
                      </Button>
                </Link>
              </NavItem>
              <Navbar.Form>
                <FormGroup className="search-nav">
                  <FormControl type="text" id="search" onFocus={this.handleShow} placeholder="I am looking for..." className="search second-search" onChange={this.handleSearch} />
                  <Link to={{
                    pathname: `/search/${this.state.search}`,
                    state: { search: this.state.search }
                  }}>
                    <Button type="submit" className="button" >
                      <Image src={search} alt='Logo' />
                    </Button>
                  </Link>
                </FormGroup>
                <DropdownButton
                  bsStyle
                  title={<Image src={logIn} alt='Logo' />}
                  id="dropdown-user"
                  noCaret
                >
                  <MenuItem eventKey="1" onClick={this.logOut}>Log out</MenuItem>
                </DropdownButton>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
    else {
      return (
        <Navbar default collapseOnSelect={this.state.show} className="general-navbar ">
          <Navbar.Header>
            <Link to="/">
              <Image src={logo} alt='Logo' className="image" />
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="general-navbar-nav nav-bar-right" >
              <NavItem>
                <Link to="/Market">
                  <Button className="btn btn-success buttons buttons-shadow-market market-btn" type="submit">
                    <Image src={market} alt='Logo' className="market-image" />
                    Market
                    </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login">
                  <Button className="btn btn-success buttons buttons-shadow-login login-btn" id="login-button" type="submit">
                    <Image src={logIn} alt='Logo' className="log-in-image" />
                    Login
                      </Button>
                </Link>
              </NavItem>
              <Navbar.Form>
                <FormGroup className="search-nav">
                  <FormControl type="text" onFocus={this.handleShow} placeholder="I am looking for..." className="search search-default" onChange={this.handleSearch} />
                  <Link to={{
                    pathname: `/search/${this.state.search}`,
                    state: { search: this.state.search }
                  }}>
                    <Button type="submit" className="button" >
                      <Image src={search} alt='Logo' />
                    </Button>
                  </Link>
                </FormGroup>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}
export default withRouter(CustomNavbar);