import React from 'react';
import { useLoaderData } from 'react-router';

const PostCardDetails = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div>
            <p>Post card details here</p>
        </div>
    );
};

export default PostCardDetails;