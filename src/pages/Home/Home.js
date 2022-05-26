import React from 'react';
import Banner from './Banner'
import Navbar from '../Shared/Header/Navbar'
import Footer from '../Shared/Footer/Footer'
import BussinessSummary from './BussinessSummary';
import Parts from './Parts';
const Home = () => {
    return (
        <div className='border-2 border-black mt-12'>
            <Navbar />
            <Banner />
            <Parts />
            <BussinessSummary />
            <Footer />
        </div>
    );
};

export default Home;