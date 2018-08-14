import React, { Component } from 'react';

import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const MainLayout = (props) => {
    return(
        <div>
        <CustomNavbar />
            {props.children}
        <Footer/>
    </div>
    );
}

export default MainLayout;