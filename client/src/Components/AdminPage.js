import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import './AdminPage.css';
// import AdminFilters from './AdminFIlters';


export default class AdminPage extends Component {
  render() {
    return (
        <div className="admin-main">
            
        <div className="admin-body">
            <div className="right-filter">
                <ListGroup className="nav-lists">
                    <ListGroupItem href="#link1" className="list-style" >
                        <p >All <Badge className="all">50</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Educational <Badge className="edu">20</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Folklores <Badge className="folk">30</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Comics <Badge className="comc">10</Badge></p> 
                    </ListGroupItem>
                    </ListGroup>
            </div>
            <div className="left-body"></div>
        </div>
        </div>
    );
  }
}