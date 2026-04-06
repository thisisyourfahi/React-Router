import React from 'react';

const SideBar = () => {
    return (
        <div className='border border-dotted rounded-md p-4'>
            <h3 className="text-center text-2xl underline">SideBar</h3>
            <p>React router is the standard library for handling client-side routing. It is used to maintain how different componenets are dispalyed based on the browser's URL</p>
            <ul className='px-4'>
                <li className='list-disc'>Navigation without reloading</li>
                <li className='list-disc'>Preserving state</li>
                <li className='list-disc'>Browser history support</li>
            </ul>
        </div>
    );
};

export default SideBar;