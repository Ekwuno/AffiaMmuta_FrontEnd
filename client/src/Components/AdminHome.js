import React, { Component } from 'react';
import { Tabs, Tab, Image, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AdminHome.css';
import AdminFilters from './AdminFilters';
import AdminSearch from './AdminSearch';
import addbook from './Assets/AddBook.png';

 export default class AdminHome extends Component {
  render() {
    return (
      <div className="adminhome-layout">
          <div className="adminhome-left right-filter">
            <AdminFilters/>
          </div>
          <div className="adminhome-right">
            <div className="admin-home-tabs-position">
              <Tabs defaultActiveKey={2} >
                <Tab eventKey={1} title="Videos">
                  Videos
                </Tab>
                <Tab eventKey={2}title="Books">
                  <div className="admin-search-add">
                    <div className="admin-home-search">
                      <AdminSearch/>
                    </div>
                    <div className="admin-add">
                        <span>Add book</span>
                        <Link to="/admin">
                          <Image src={addbook} alt=""/>
                        </Link>
                    </div>
                  </div>
                  
                </Tab>
                <Tab eventKey={3} title="Comics">
                  Comics
                </Tab>
              </Tabs>
            </div>
          </div>
      </div>
    );
  }
}