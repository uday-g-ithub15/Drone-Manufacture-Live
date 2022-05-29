import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className='flex justify-around -mt-10 mb-10 p-10'>
            <div>
                <Outlet />
            </div>
            <ul>
                <li>
                    <Link className='btn btn-link text-2xl text-[#3600f96b]' to='/portfolio'>About Me</Link>
                </li>
                <li>
                    <Link className='btn btn-link text-2xl text-[#3600f96b]' to='/portfolio/about/skills'>My Skills</Link>
                </li>
                <li>
                    <Link className='btn btn-link text-2xl text-[#3600f96b]' to='/portfolio/about/contact'>Contact Me</Link>
                </li>
                <li>
                    <Link className='btn btn-link text-2xl text-[#3600f96b]' to='/portfolio/about/projects'>My Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default About;