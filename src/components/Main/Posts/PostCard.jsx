import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const PostCard = ({ post, user }) => {
    console.log(post, user);
    return (
        <div className='border border-dotted rounded-md p-4'>
            <div className='flex items-center gap-2'>
                <FaUserCircle size={40} />
                <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p>{user.username}</p>
                </div>
            </div>
            <div className='border border-dotted p-4 rounded-md'>
                    <h3 className="font-semibold">{post.title}</h3>
                    <p>{post.body}</p>

            </div>
        </div>
    );
};

export default PostCard;