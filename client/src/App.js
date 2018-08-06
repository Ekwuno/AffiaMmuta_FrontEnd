import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUpPage from "./Components/SignUpPage";
import CustomNavbar from "./Components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <CustomNavbar />
          <Route path="/" component={SignUpPage} exact/>
          {/* <Route  path="/" component={Sign-In} /> */}
          {/* <Route path="/" component={Cart} /> */}
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
