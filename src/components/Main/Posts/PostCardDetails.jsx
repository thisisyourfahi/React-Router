import React from 'react';
import { FaInfoCircle, FaUserCircle } from 'react-icons/fa';
import { NavLink, useLoaderData } from 'react-router';


const PostCardDetails = () => {
    const { post, user } = useLoaderData();
    console.log(post, user);

    return (
        <div>
            <p className='underline mb-4'>Post Details:</p>
            <div>
                <div className='flex justify-between items-center border border-dotted rounded-md p-1 mb-2'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle size={40} />
                        <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <div className='btn btn-outline btn-circle btn-primary btn-sm'>
                        <NavLink to={`/users/${user.id}`}>
                            <FaInfoCircle size={20}></FaInfoCircle>
                        </NavLink>
                    </div>
                </div>
                <div className='border border-dotted p-4 rounded-md flex-1'>
                    <h3 className="text-lg font-semibold">{(post.title.toUpperCase())}</h3>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCardDetails;