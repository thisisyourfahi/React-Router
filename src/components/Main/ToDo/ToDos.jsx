import React from 'react';
import { useLoaderData } from 'react-router';

const ToDos = () => {
    const todos = useLoaderData();
    console.log(todos);
    return (
        <div>
           <p>ToDos Section</p> 
        </div>
    );
};

export default ToDos;