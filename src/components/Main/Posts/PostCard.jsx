import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router';

const PostCard = ({ post }) => {
    return (
        <div className='border border-dotted rounded-md p-4 flex flex-col gap-4'>
            <div className='border border-dotted p-4 rounded-md flex-1'>
                <h3 className="text-lg font-semibold">{(post.title.toUpperCase())}</h3>
                <p>{post.body}</p>
            </div>

            <NavLink to={`/posts/${post.id}`}>
                <button className='btn btn-outline btn-primary w-full'>Show Details</button>
            </NavLink>
        </div>
    );
};

export default PostCard;