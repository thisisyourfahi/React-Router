import React, { use } from 'react';
import PostCard from './PostCard';

const Posts = ({postsPromise, usersPromise}) => {
    const posts = use(postsPromise);
    const users = use(usersPromise);

    return (
        <div className='flex flex-col'>
            <p className='sticky top-0 self-start underline mb-4'>Posts Section</p>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    posts.map(post => <PostCard key={post.id} post={post} user={users.find(user => user.id === post.userId)}/>)
                }
            </div>
        </div>
    );
};

export default Posts;