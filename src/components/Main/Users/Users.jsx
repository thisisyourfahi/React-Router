import React, { use } from 'react';
import UserCard from './UserCard';
// import { useLoaderData } from 'react-router';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    // console.log('users: ', users);
    return (
        <div>
            <p className='underline mb-4'>Users Section</p>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    users.map(user => <UserCard key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Users;