import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Image, ProgressBar, Modal, Button } from 'react-bootstrap';
import './BookReader.css';
import comment from './Assets/Comment.png';
import next from './Assets/Next.png';
import previous from './Assets/Previous.png';
import ikenga from './Assets/ikengaHead.png'
import axios from 'axios';

export default class BookReader extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            numPages: null,
            pageNumber: 1,
            ikenga: 0,
            bookProgress: 0,
            show: false,
            comment: ''
        }
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
        this.removeCounter();
    }
    handleNext = () => {
        if (this.state.pageNumber < this.state.numPages) {
            this.setState({ pageNumber: this.state.pageNumber + 1 })
            this.pageProgress();
        }
    }
    handlePrevious = () => {
        if (this.state.pageNumber > 1) {
            this.setState({ pageNumber: this.state.pageNumber - 1 });
            this.pageProgress();
        }
    }
    increaseIkenga = () => {
        if (this.state.ikenga < 10) {
            this.setState({ ikenga: this.state.ikenga + 1 });
            this.showCounter();

        }

        // console.log(this.state.ikenga);

    }

    removeCounter = () => {
        let ikengaCounter = document.getElementById("count");
        if (this.state.ikenga == 0) {
            ikengaCounter.style.display = "none";
        }
    }

    showCounter = () => {
        let ikengaCounter = document.getElementById("count");
        if (this.state.ikenga >= 0) {
            ikengaCounter.style.display = "block";
        }
        setTimeout(() => { ikengaCounter.style.display = "none" }, 2000);
    }
    pageProgress = () => {
        let percentCompleted = Math.round((this.state.pageNumber / this.state.numPages) * 100);
        this.setState({ progress: percentCompleted });
    }
    handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            this.handleNext();
        } else if (e.key === "ArrowLeft") {
            this.handlePrevious();
        }
    }
    getComment = event =>{
        this.setState({
            comment: event.target.value
        });
        console.log(this.state.comment);
        
    }

    sendComment = () =>{
        const bookId=this.props.match.params.id;
        const user=sessionStorage.getItem("user");
        const data={
            user: user,
            commentBody: this.state.comment,
            book: bookId
        }
        console.log(data);
        
        axios.post(`https://affiammuta.herokuapp.com/books/book/${bookId}/create`, data)
        .then(res =>{
            alert(res.data.message)
        })
    }
    render() {

        const { pageNumber, numPages } = this.state;
        return (
            <div onKeyDown={this.handleKeyDown} className="reader-container">
                <div className="readScreen">
                    <div>
                        <div className="previous-btn" onClick={this.handlePrevious}>
                            <Image src={previous} alt='Previous' className="prev-arrow" onClick={this.handlePrevious}/>
                        </div>
                        <div className="counter" id="count">+{this.state.ikenga}</div>
                        <div className="ikenga-btn">
                            <Image src={ikenga} alt='Ikenga' className="ikenga" onClick={this.increaseIkenga} />
                        </div>
                        <div className="comment-btn" onClick={this.handleShow}>
                            <Image src={comment} alt='Comment' className="comment-image" />
                        </div>
                    </div>
                    <div>


                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <div className="logo-container"><Image src={ikenga} alt='Affiammuta Logo' className="ikengaModal" /></div>
                                <Modal.Title>Comment on this book</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <textarea className="modalText" id="modalText" cols="40" rows="10" onChange={this.getComment}></textarea>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="submit" onClick={this.sendComment}>Submit</Button>
                                <Button className="closeBtn" onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>


                        <Document
                            file="http://res.cloudinary.com/debugger/image/upload/v1534499878/bsaa015qd43pjh4igala.pdf"
                            onLoadSuccess={this.onDocumentLoad}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="bookProgress">
                        <div className="pageNumber">Page {pageNumber} of {numPages} ({this.state.progress}%)</div>
                        <ProgressBar className="book-bar" now={this.state.progress} />
                    </div>
                    <div>
                        <div className="next-btn" onClick={this.handleNext}>
                            <Image src={next} alt='Next' className="next-arrow" onClick={this.handleNext}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}