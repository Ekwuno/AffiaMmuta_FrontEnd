import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import './AdminHome.css';
import AdminFilters from './AdminFilters';
import AdminBooks from './AdminBooks';

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
                  <AdminBooks/>
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