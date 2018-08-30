import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Image, ProgressBar } from 'react-bootstrap';
import './BookReader.css';
import comment from './Assets/Comment.png';
import next from './Assets/Next.png';
import previous from './Assets/Previous.png';
import ikenga from './Assets/ikengaHead.png'

export default class BookReader extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        ikenga: 0,
        bookProgress: 0
    }
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
        this.removeCounter();
    }
    handleNext =() => {
        if (this.state.pageNumber<this.state.numPages){
            this.setState({pageNumber: this.state.pageNumber + 1})
            this.pageProgress();
        }
    }
    handlePrevious =() => {
        if(this.state.pageNumber > 1){
            this.setState({pageNumber: this.state.pageNumber - 1});
            this.pageProgress();
        }
    }
    increaseIkenga =() => {
        if(this.state.ikenga < 10) {
            this.setState({ikenga: this.state.ikenga + 1});
            this.showCounter();
                     
        }
        
        // console.log(this.state.ikenga);
        
    }

    removeCounter=()=>{
        let ikengaCounter = document.getElementById("count");
        if (this.state.ikenga==0) {
            ikengaCounter.style.display = "none";
        }
    }

    showCounter=()=>{
        let ikengaCounter = document.getElementById("count");
        if (this.state.ikenga >= 0) {
            ikengaCounter.style.display = "block";  
        }
        setTimeout(()=>{ikengaCounter.style.display = "none"}, 2000);
    }
    pageProgress=()=>{
            let percentCompleted = Math.round((this.state.pageNumber/this.state.numPages) *100);
            this.setState({progress: percentCompleted});
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
                    <div className="counter" id="count">+{this.state.ikenga}</div>
                    <div className="ikenga-btn">
                    <Image src={ikenga} alt='Ikenga' className="ikenga" onClick={this.increaseIkenga}/>
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
                        <div className="pageNumber">Page {pageNumber} of {numPages} ({this.state.progress}%)</div>
                        <ProgressBar className="book-bar" now={this.state.progress} />
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