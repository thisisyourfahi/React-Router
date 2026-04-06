import React from 'react';
import Nav from '../components/NavBar/Nav';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="container mx-auto flex items-center gap-4 py-4 px-10">
                <div className='sticky top-0 w-[20%] self-start'>
                    <SideBar />
                </div>

                <div className='border border-dotted rounded-md p-4 w-[80%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;

