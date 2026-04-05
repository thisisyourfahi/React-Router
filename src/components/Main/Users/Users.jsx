import React, { use } from 'react';
// import { useLoaderData } from 'react-router';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log('users: ', users);
    return (
        <div>
            <p>Users Section</p>

        </div>
    );
};

export default Users;