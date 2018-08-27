import React, { Component } from 'react';
import './App.css';
import MainLayout from "./Components/MainLayout";
import SecondLayout from "./Components/SecondLayout";
import ReadLayout from './Components/ReadLayout';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import AdminPage from "./Components/AdminPage";
import LogIn from "./Components/LogIn";
import Market from "./Components/Market";
import Cart from "./Components/Cart";
import Library from "./Components/Library";
import BookInfo from './Components/BookInfo';
import BookReader from './Components/BookReader';

const AppRoute = ({Component, Layout, ...rest}) => (
        <Route {...rest} render={props=> (
          <Layout>
            <Component {...props}/>
          </Layout>
        )}/>
)

class App extends Component {
  render() {
    return(
      <Router>
          <div>
            <AppRoute exact path="/" Layout={MainLayout} Component={HomePage}/>
            <AppRoute exact path="/signup" Layout={MainLayout} Component={SignUpPage} />
            <AppRoute exact path="/login" Layout={MainLayout} Component={LogIn} />
            <AppRoute exact path="/market" Layout={MainLayout} Component={Market} />
            <AppRoute exact path="/cart" Layout={MainLayout} Component={Cart} />
            <AppRoute exact path="/admin" Layout={SecondLayout} Component={AdminPage} />
            <AppRoute exact path="/library" Layout={MainLayout} Component={Library} />
            <AppRoute exact path="/book/:id" Layout={MainLayout} Component={BookInfo} />
            <AppRoute exact path="/read" Layout={ReadLayout} Component={BookReader} />
          </div>
      </Router>
    );
  }
}

export default App;