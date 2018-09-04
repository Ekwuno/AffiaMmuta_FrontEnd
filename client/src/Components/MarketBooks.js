import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import AllBooks from './AllBooks';
import './MarketBooks.css';
import Comics from './Comics';
import Recent from './Recent';
import Educational from './Educational';

export default class MarketBooks extends Component {
  render() {
        
    return (
        <div className="market-books-container">
            <div>
                <Tabs defaultActiveKey={1} >
                    <Tab eventKey={1} title="ALL">
                        <AllBooks/>
                    </Tab>
                    <Tab eventKey={2}title="RECENT" className="right-tab">
                        <Recent/>
                    </Tab>
                    <Tab eventKey={3} title="EDUCATIONAL" className="right-tab">
                        <Educational/>
                    </Tab>
                    <Tab eventKey={4} title="COMICS" className="right-tab">
                        <Comics/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
  }
}