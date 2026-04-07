import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router';

const PostCard = ({ post, user }) => {
    // console.log(post, user);
    return (
        <div className='border border-dotted rounded-md p-4 flex flex-col'>
            {/* <div className='flex items-center gap-2'>
                <FaUserCircle size={40} />
                <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p>{user.username}</p>
                </div>
            </div> */}
            <div className='border border-dotted p-4 rounded-md flex-1'>
                <h3 className="text-lg font-semibold">{(post.title.toUpperCase())}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostCard;