import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center p-10'>
            <span className="loading loading-bars loading-xl w-16"></span>
        </div>
    );
};

export default LoadingSpinner;