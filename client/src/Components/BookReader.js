import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import './BookReader.css';

export default class BookReader extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        ikenga: 1
    }
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    handleNext =() => {
        if (this.state.pageNumber<this.state.numPages){
            this.setState({pageNumber: this.state.pageNumber + 1})
        }
    }
    handlePrevious =() => {
        if(this.state.pageNumber > 1){
            this.setState({pageNumber: this.state.pageNumber - 1})
        }
    }
    increaseIkenga =() => { 
        if(this.state.ikenga < 10) {
            this.setState({ikenga: this.state.ikenga + 1})
        }
        console.log(this.state.ikenga)
    }
    handleKeyDown =(e)=> {
        if (e.key === "ArrowRight") {
            this.handleNext();
        } else if (e.key === "ArrowLeft" ) {
             this.handlePrevious();
        }
    }
    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div onKeyDown={this.handleKeyDown} className="reader-container">
                <div></div>
                <div>
                    <Document
                        file="http://res.cloudinary.com/debugger/image/upload/v1534499878/bsaa015qd43pjh4igala.pdf"
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <button onClick={this.handlePrevious}>previous</button>
                    <button onClick={this.handleNext}>next</button>
                    {/* <button onClick={this.increaseIkenga}>Ikenga</button> */}
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                </div>
                <div></div>
            </div>
        );
    }
}