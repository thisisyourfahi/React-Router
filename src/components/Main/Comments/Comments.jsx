import React from 'react';
import { useLoaderData } from 'react-router';

const Comments = () => {
    const comments = useLoaderData();
    console.log(comments);
    return (
        <div>
            <p>Comments section</p>
        </div>
    );
};

export default Comments;