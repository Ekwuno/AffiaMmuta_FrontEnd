import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Image } from 'react-bootstrap';
import './BookReader.css';
import comment from './Assets/Comment.png';
import next from './Assets/Next.png';
import previous from './Assets/Previous.png';
import ikenga from './Assets/ikengaHead.png'

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
                <div>
                    <div className="previous-btn" onClick={this.handlePrevious}>
                        <Image src={previous} alt='Previous' className="prev-arrow" />
                    </div>
                    <div className="counter">+5</div>
                    <div className="ikenga-btn">
                    <Image src={ikenga} alt='Ikenga' className="ikenga" />
                    </div>
                    <div className="comment-btn">
                    <Image src={comment} alt='Comment' className="comment-image" />
                    </div>
                </div>
                <div className="readScreen">
                    <Document
                        file="http://res.cloudinary.com/debugger/image/upload/v1534499878/bsaa015qd43pjh4igala.pdf"
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    {/* <button onClick={this.increaseIkenga}>Ikenga</button> */}
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                    <div className="bookProgress">
                        <div className="pageNumber">Page {pageNumber} of {numPages} {(pageNumber/numPages)*100}</div>
                        <div className="progressBar">
                            <div id="myBar"></div>
                        </div>
                        </div>
                    </div>
                <div>
                    <div onClick={this.handleNext} className="next-btn">
                        <Image src={next} alt='Next' className="next-arrow" />
                    </div>
                </div>
            </div>
        );
    }
}