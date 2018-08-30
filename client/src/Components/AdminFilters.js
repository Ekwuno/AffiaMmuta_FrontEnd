import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";

 export default class AdminFilters extends Component {
  render() {
    return (
      <div >
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
    );
  }
}