import React from 'react';
import Banner from './Banner'
import Navbar from '../Shared/Header/Navbar'
import Footer from '../Shared/Footer/Footer'
import BussinessSummary from './BussinessSummary';
import DisplayParts from './DispalyParts';
import GetInTouch from './GetInTouch';
import TeamMember from './TeamMember';
import { Box } from '@mui/material';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ width: '95%', margin: '0 auto' }}>
                <Banner />
                <DisplayParts />
                <BussinessSummary />
                <GetInTouch />
                <TeamMember />
            </Box>
            <Footer />
        </div>
    );
};

export default Home;