import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Image } from "react-bootstrap";
import './AdminHome.css';
import adminSearch from './Assets/Search.png';

 export default class AdminSearch extends Component {
  render() {
    return (
      <div>
        <Form inline>
            <FormGroup>
                <FormControl type="text" placeholder="Find a book..." className="search search-admin" />
                <Button type="submit" className= "button button-admin">
                    <Image src={adminSearch} alt='Logo'/>
                </Button>
            </FormGroup>
        </Form>
      </div>
    );
  }
}