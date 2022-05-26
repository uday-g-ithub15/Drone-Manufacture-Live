import React from 'react';
import { BiError } from 'react-icons/bi'

const Error = () => {
    return (
        <div className='w-80 h-80 fixed top-0 bottom-0 left-0 right-0 m-auto flex flex-col justify-center items-center'>
            <h1 className='text-error text-9xl '><BiError /></h1>
            <h1 className='text-error text-4xl'>404 Page not found</h1>
        </div>
    );
};

export default Error;