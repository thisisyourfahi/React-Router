import React, { use } from 'react';
import { NavLink } from 'react-router';

const ToDos = ({todosPromise}) => {
    const todos = use(todosPromise);
    console.log('todos:', todos);
    return (
        <div>
           <p className='underline mb-2'>ToDos Section</p> 
           <NavLink to={'/'}>
                <button className='btn btn-outline btn-primary btn-sm'>Home</button>
           </NavLink>
        </div>
    );
};

export default ToDos;