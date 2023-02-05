import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../Shared/Header/Navbar';

const MyPortfolio = () => {
    return (
        <>
            <Navbar />
            <Box>
                <Box variant='iframe' component='iframe' src='https://uday-hasan-portfolio.web.app/' frameborder='1' title='Uday Hasan Portfolio' sx={{ width: '100%', height: '100vh', }}>
                </Box>
            </Box>
        </>
    );
};

export default MyPortfolio;

