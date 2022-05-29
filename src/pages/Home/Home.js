import React from 'react';
import Banner from './Banner'
import Navbar from '../Shared/Header/Navbar'
import Footer from '../Shared/Footer/Footer'
import BussinessSummary from './BussinessSummary';
import DisplayParts from './DispalyParts';
const Home = () => {
    return (
        <div className='border-2 border-black mt-12'>
            <Navbar />
            <Banner />
            <DisplayParts />
            <BussinessSummary />
            <Footer />
        </div>
    );
};

export default Home;