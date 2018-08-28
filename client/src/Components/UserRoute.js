import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const UserRoute = ({Component, Layout, ...rest}) => (
<Route
   {...rest}
   render ={props =>
   sessionStorage.getItem("user") ? 
            <Layout>
            <Component {...props}/>
            </Layout> : 
            <Redirect to="/login"/>}
/>
);

export default UserRoute;