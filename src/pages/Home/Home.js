import React from 'react';
import Banner from './Banner'
import BussinessSummary from './BussinessSummary';
const Home = () => {
    return (
        <div className='border-2 border-black'>
            <Banner />
            <BussinessSummary />
        </div>
    );
};

export default Home;