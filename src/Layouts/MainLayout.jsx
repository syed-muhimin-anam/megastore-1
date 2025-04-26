import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Root/Navbar';
import Features from '../Components/features/Features';
// import Navbar from ''

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Features></Features>
            
        </div>
    );
};

export default MainLayout;