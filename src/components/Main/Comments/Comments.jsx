import React, { use } from 'react';
import { NavLink } from 'react-router';

const Comments = ({ commentsPromise }) => {
    const comments = use(commentsPromise);
    console.log('comments:', comments);
    return (
        <div>
            <p className='underline mb-2'>Comments Section</p>
            <NavLink to={'/'}>
                <button className='btn btn-outline btn-primary btn-sm'>Home</button>
            </NavLink>
        </div>
    );
};

export default Comments;