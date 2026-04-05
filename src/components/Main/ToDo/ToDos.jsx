import React, { use } from 'react';

const ToDos = ({todosPromise}) => {
    const todos = use(todosPromise);
    console.log('todos:', todos);
    return (
        <div>
           <p>ToDos Section</p> 
        </div>
    );
};

export default ToDos;