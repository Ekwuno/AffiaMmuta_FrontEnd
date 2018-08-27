import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import AllBooks from './AllBooks';
import './MarketBooks.css';
import Popular from './Popular';
import MostRead from './MostRead';
import Comics from './Comics';

export default class MarketBooks extends Component {
  render() {
        
    return (
        <div className="market-books-container">
            <div>
                <Tabs defaultActiveKey={1} >
                    <Tab eventKey={1} title="ALL">
                        <AllBooks />
                    </Tab>
                    <Tab eventKey={2}title="POPULAR BOOKS" className="right-tab">
                        <Popular />
                    </Tab>
                    <Tab eventKey={3} title="MOST READ BOOKS" className="right-tab">
                        <MostRead />
                    </Tab>
                    <Tab eventKey={4} title="COMIC BOOKS" className="right-tab">
                        <Comics/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
  }
}