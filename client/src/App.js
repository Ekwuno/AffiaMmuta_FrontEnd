import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import LogIn from "./Components/LogIn";
import Market from "./Components/Market";
import Cart from "./Components/Cart";
import CustomNavbar from "./Components/CustomNavbar";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <CustomNavbar />
            <Route path="/" component={HomePage} exact/>
            <Route path="/Sign-up" component={SignUpPage}/>
            <Route path="/Log-in" component={LogIn}/>
            <Route path="/Market" component={Market}/>
            <Route path="/Cart" component={Cart}/>
          <Footer /> 
        </div>
        
      </BrowserRouter> 
    );
  }
}

export default App;