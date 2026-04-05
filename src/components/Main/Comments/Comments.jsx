import React, { use } from 'react';

const Comments = ({commentsPromise}) => {
    const comments = use(commentsPromise);
    console.log('comments:', comments);
    return (
        <div>
            <p>Comments section</p>
        </div>
    );
};

export default Comments;