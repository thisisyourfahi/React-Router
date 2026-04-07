import React, { use } from 'react';
import PostCard from './PostCard';

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);

    return (
        <div className='flex flex-col'>
            <p className='sticky top-0 self-start underline mb-4'>Posts Section</p>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    posts.map(post => <PostCard key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Posts;