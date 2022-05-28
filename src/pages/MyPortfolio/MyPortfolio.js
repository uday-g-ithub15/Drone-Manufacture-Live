import React from 'react';
import Navbar from '../Shared/Header/Navbar';

const MyPortfolio = () => {
    return (
        <>
            <Navbar />
            <section className='mt-24 text-3xl text-accent bg-slate-100 p-10'>
                <h1><span className="font-bold">Name</span> : Uday Hasan</h1>
                <h3><span className="font-bold">Email</span> : mudayhasan@gmail.com</h3>
                <h3><span className="font-bold">Education</span> : Complete HSC(Science) in 2020 from BN College and currently try to get admission in university</h3>
                <h3 className='font-bold'>Technologies I've as a web developer </h3>
                <ol className='list-decimal pl-10'>
                    <li>Java Script</li>
                    <li>Tailwind Css</li>
                    <li>DaisyUi</li>
                    <li>Bootstrap</li>
                    <li>React Js</li>
                    <li>Express Js</li>
                    <li>MongoDb</li>
                </ol>
                <h3 className='font-bold'>My some projects ....</h3>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </section>
        </>
    );
};

export default MyPortfolio;