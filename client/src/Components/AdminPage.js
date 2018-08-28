import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { FormGroup, FormControl, Button, Image, Form, } from "react-bootstrap";
import adminSearch from './Assets/Search.png';
import './AdminPage.css';
import AdminFilters from './AdminFilters';
import AddBook from './AddBook';


class AdminPage extends Component {

    render() {
        return (
            <div className="admin-main">
                
            <div className="admin-body">
                <div className="right-filter">
                    <AdminFilters/>
                </div>
                <div className="left-body">
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
                        <AddBook/>
                </div>
            </div>
            </div>
        );
    }
}
export default withRouter(AdminPage);