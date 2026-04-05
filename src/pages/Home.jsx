import React from 'react';
import Nav from '../components/NavBar/Nav';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="flex items-center gap-4 py-4 px-10">
                <SideBar />

                <div className='border border-dotted rounded-md p-4 w-[70%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;