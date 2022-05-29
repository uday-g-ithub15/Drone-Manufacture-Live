import React from 'react';
import Navbar from '../Shared/Header/Navbar';
import About from './About';
import Banner from './Banner';

const MyPortfolio = () => {
    return (
        <>
            <Navbar />
            <section className='mt-20 text-3xl text-accent bg-slate-100 '>
                <Banner />
                <About />
            </section>
        </>
    );
};

export default MyPortfolio;

