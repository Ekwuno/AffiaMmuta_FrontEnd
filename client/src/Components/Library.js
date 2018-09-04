import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Badge, Image } from "react-bootstrap";
import './Library.css';
import axios from "axios";
import fbIcon from './Assets/TwitterLogo.png';
import tIcon from './Assets/FbWhiteLogo.png';
import filled from './Assets/IkengaFilled.png';



export default class Library extends Component {
    state = {
        userLibrary: []
    }
    
    componentDidMount(){
        const user = sessionStorage.getItem("user");
        axios.get(`https://affiammuta.herokuapp.com/profile/library?user=${user}`)
    .then(res=>{
       this.setState({userLibrary: res.data.library.books});
       console.log(res.data)
     })
    }
  render() {
      const userLibrary = this.state.userLibrary.map(item =>
           <div className="library-contents">
                    <div className="library-book-container">
                        <div className="library-book-position">
                            <div className="library-book-image">
                                <img src={item.bookImage} className ="lib-cover-img" alt="" />
                            </div>
                            <div className="library-book-des">
                                <p className="library-book-name">{item.title}</p>
                                <p className="library-book-author">by <strong>{item.author}</strong></p>
                                <div className="ikenga-container">
                                    <Image src={filled} alt="ratings" />
                                    <Badge className="badge-rate">{item.ikenga}</Badge>
                                </div>
                                <div className="button-connect">
                                    <div>
                                    <Link to={{
                                        pathname:`/read/${item._id}`,
                                        state: {Library: item._id}
                                            }}>
                                        <button className="library-button">Read</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="#">
                                            <button className="library-button fb-library">
                                            <Image src={fbIcon} alt='Logo' />
                                            Share
                                            </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="#">
                                        <button className="library-button tw-library">
                                            <Image src={tIcon} alt='Logo' />
                                            Tweet
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
    return (
        <div className="library-background">
            <div className="library-layout">
                <div className="library-header">
                    <h2>Library</h2>
                </div>
                {userLibrary}
            </div>
        </div>
    );
  }
}