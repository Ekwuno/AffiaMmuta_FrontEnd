import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import './AdminHome.css';
import AdminFilters from './AdminFilters';

 export default class AdminHome extends Component {
  render() {
    return (
      <div className="adminhome-layout">
          <div className="adminhome-left right-filter">
            <AdminFilters/>
          </div>
          <div className="adminhome-right"></div>
      </div>
    );
  }
}