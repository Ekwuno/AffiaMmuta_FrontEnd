import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
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
          <Footer /> 
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;