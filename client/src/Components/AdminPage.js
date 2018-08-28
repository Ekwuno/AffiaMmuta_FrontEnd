import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './AdminPage.css';
import AdminFilters from './AdminFilters';
import AddBook from './AddBook';
import AdminSearch from './AdminSearch';


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
                        <AdminSearch/>
                    </div>
                        <AddBook/>
                </div>
            </div>
            </div>
        );
    }
}
export default withRouter(AdminPage);