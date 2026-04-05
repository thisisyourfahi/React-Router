import React from 'react';
import Nav from '../components/NavBar/Nav';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="flex items-center gap-4">
                <SideBar />

                <Outlet />
            </div>
        </div>
    );
};

export default Home;