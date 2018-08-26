import React, { Component } from 'react';
import ReadNavbar from "./ReadNavbar";

const ReadLayout = (props) => {
    return(
        <div>
        <ReadNavbar />
            {props.children}
    </div>
    );
}

export default ReadLayout;