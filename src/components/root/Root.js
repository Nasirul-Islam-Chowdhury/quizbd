import React from 'react';
import NavBar from '../navBar/NavBar';
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;