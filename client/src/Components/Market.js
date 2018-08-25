import React, { Component } from 'react';
import MarketTitle from './MarketTitle';
import './Market.css';


export default class Market extends Component {
  render() {
    return (
        <div>
            <div className="market-margin">
                <MarketTitle />
            </div>
        </div>
    );
  }
}