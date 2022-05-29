import React from 'react';

const Projects = () => {
    return (
        <>
            <ul className='list-decimal'>
                <h1 className='text-3xl text-[#3600f96b] font-bold my-5'>My latest projects </h1>
                <li> <a className='btn btn-link text-2xl' target='_blank' rel="noreferrer" href='https://warehouse-dd179.web.app/'>Unique Shop Warehoue</a></li>
                <li> <a className='btn btn-link text-2xl' target='_blank' rel="noreferrer" href='https://candid-shots-8c63c.web.app/'>The Technology Connection </a></li>
                <li> <a className='btn btn-link text-2xl' target='_blank' rel="noreferrer" href='https://uday-assignment-9.netlify.app/'>Laptop Zone</a></li>
            </ul>
        </>
    );
};

export default Projects;