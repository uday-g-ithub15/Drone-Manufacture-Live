import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='portfolio-banner'>
            <div className=" absolute top-[50%] left-[50%] z-10">
                <p className='text-lg text-[#b4b486]'>Web Developer</p>
                <h1 className='text-5xl'>Hello, I'm <span className='text-[#3600f96b]'>Uday</span> Welcome to my world.</h1>
            </div>
        </div>
    );
};

export default Banner;