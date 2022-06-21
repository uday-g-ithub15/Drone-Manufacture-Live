import React from 'react';
import Navbar from '../Shared/Header/Navbar';

const MyPortfolio = () => {
    return (
        <>
            <Navbar />
            <section className='mt-20 text-3xl text-accent bg-slate-100  '>
                <iframe src="https://uday-hasan-portfolio.web.app/" frameborder="1" title='Uday Hasan Portfolio' className='w-full h-screen'  ></iframe>
            </section>
        </>
    );
};

export default MyPortfolio;

