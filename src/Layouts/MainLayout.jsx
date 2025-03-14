import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Root/Navbar';
// import Navbar from ''

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;