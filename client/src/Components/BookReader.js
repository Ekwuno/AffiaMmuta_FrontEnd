import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Image, ProgressBar, Modal, Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './BookReader.css';
import comment from './Assets/Comment.png';
import next from './Assets/Next.png';
import previous from './Assets/Previous.png';
import ikenga from './Assets/ikengaHead.png'
import axios from 'axios';
import library from './Assets/LibraryLogo.png';
import cancel from './Assets/Cancel.png';

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
            comment: '',
            bookLocation: '',
            bookTitle: '',
            seekValue: ''
        }
    }

    handleClose() {
        this.setState({ show: false });
    }
    setSeekValue = event => {
        this.setState({
            seekValue: event.target.value
        })
    }

    handleShow() {
        this.setState({ show: true });
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
        console.log(this.state.numPages);
        if (sessionStorage.getItem(this.props.match.params.id)){
             this.setState({ pageNumber: Number.parseInt(sessionStorage.getItem(this.props.match.params.id))})
            console.log(sessionStorage.getItem(this.props.match.params.id));
        }
          else {
             sessionStorage.setItem(this.props.match.params.id, this.state.pageNumber);
     }
        this.pageProgress();
        this.removeCounter();
    }
    handleNext = () => {
        if (this.state.pageNumber < this.state.numPages) {
            this.setState({ pageNumber: this.state.pageNumber + 1 })
            sessionStorage.setItem(this.props.match.params.id, this.state.pageNumber+1);
            this.pageProgress();
        }
    }
    handlePrevious = () => {
        if (this.state.pageNumber > 1) {
            this.setState({ pageNumber: this.state.pageNumber - 1 });
            sessionStorage.setItem(this.props.match.params.id, this.state.pageNumber-1);
            this.pageProgress();
        }
    }
    handleSeek = () => {
        if (this.state.seekValue <= this.state.numPages) {
            this.setState({ pageNumber: Number.parseInt(this.state.seekValue)   })
            sessionStorage.setItem(this.props.match.params.id, this.state.seekValue);
            this.pageProgress();
        }
    }
    increaseIkenga = () => {
        if (this.state.ikenga < 10) {
            this.setState({ ikenga: this.state.ikenga + 1 });
            this.showCounter();
            axios.get(`https://affiammuta.herokuapp.com/profile/read/clap?book=${this.props.match.params.id}&ikenga=${Number.parseInt(this.state.ikenga)}`)
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
        else if (e.key ==="Enter") {
            this.handleSeek();
        }
    }
    getComment = event => {
        this.setState({
            comment: event.target.value
        });
        console.log(this.state.comment);

    }

    componentDidMount() {
        axios.get(`https://affiammuta.herokuapp.com/books/book/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ 
                    bookLocation: res.data.book.bookContent,
                    bookTitle: res.data.book.title
                 });
            })
    }

    sendComment = () => {
        const bookId = this.props.match.params.id;
        const user = sessionStorage.getItem("user");
        const data = {
            user: user,
            commentBody: this.state.comment,
            book: bookId
        }
        console.log(data);

        axios.post(`https://affiammuta.herokuapp.com/books/book/${bookId}/create`, data)
            .then(res => {
                this.handleClose();
                alert(res.data.message);
            })
    }
    render() {

        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <Navbar className="read-navbar">
                    <Nav>
                        {/* <NavItem className="read-header-content-positon">
                            <Link to="/library">
                                <Button className="read-book-contents-btn" type="submit">
                            <Image src={library} alt='Logo' className="library-in-image" />
                                Library
                            </Button>
                            </Link>
                        </NavItem> */}
                        <NavItem className="read-header-text-positon">
                                <h5>{this.state.bookTitle}</h5>
                        </NavItem>
                        <NavItem className="nav-cancel">
                            <Link to="/library">
                            <Button className="read-book-close" type="submit">
                                Close
                                <Image src={cancel} alt="cancel" />
                            </Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div onKeyDown={this.handleKeyDown} className="reader-container">
                
                <div className="readScreen">
                    <div>
                        <div className="previous-btn" onClick={this.handlePrevious}>
                            <Image src={previous} alt='Previous' className="prev-arrow" onClick={this.handlePrevious} />
                        </div>
                        <div className="counter" id="count">+{this.state.ikenga}</div>
                        <div className="ikenga-btn">
                            <Image src={ikenga} alt='Ikenga' className="ikenga" onClick={this.increaseIkenga} />
                        </div>
                        <div className="comment-btn" >
                            <Image src={comment} alt='Comment' className="comment-image" onClick={this.handleShow}/>
                            <input type="number" className="read-seek" onChange={this.setSeekValue}/> of {this.state.numPages}
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
                            file={this.state.bookLocation}
                            onLoadSuccess={this.onDocumentLoad}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="bookProgress">
                        <div className="pageNumber">Page {pageNumber} of {numPages}</div>
                        {/* <ProgressBar className="book-bar" now={this.state.progress} /> */}
                    </div>
                    <div>
                        <div className="next-btn" onClick={this.handleNext}>
                            <Image src={next} alt='Next' className="next-arrow" onClick={this.handleNext} />
                        </div>
                    </div>
                </div>

            </div>
            </div>

            
        );
    }
}