import React, {
    Component
} from 'react';
import Footer from "./Footer";
import AdminNavbar from './AdminNavbar';

const SecondLayout = (props) => {
    return(
        <div>
            <AdminNavbar />
            {props.children}
             <Footer/>
      </div>
    )
}

export default SecondLayout;