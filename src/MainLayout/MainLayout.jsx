import React, { Suspense } from 'react';
import Nav from '../components/Navbar/Nav';
import Foods from '../components/Foods/Foods';
import { Outlet } from 'react-router';
import Loading from '../components/Loading/Loading';






const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />

        </div>
    );
};

export default MainLayout;