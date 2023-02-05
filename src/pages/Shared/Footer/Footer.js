import React from 'react';
// import footerBg from '../../../images/footerBG.jpg'
import { GiElectric } from 'react-icons/gi'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import { Box, Button, Stack, styled, Typography } from '@mui/material';

const Footer = () => {
    const ELEMENT = styled(Box)({
        display: 'flex', alignItems: 'center', padding: '0.5em',
    })
    const TITLE = styled('h2')({
        marginBottom: '0.5em',
    })

    return (
        <Box component={'footer'} sx={{ marginTop: '0.5em', backgroundColor: '#ede9e4' }} >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1em', flexWrap: 'wrap', }} >
                <Box sx={{ margin: '0.5em' }}>
                    <ELEMENT >
                        <TITLE >Drone Manufacturing</TITLE>
                        <h1 ><GiElectric /></h1>
                    </ELEMENT>
                    <ELEMENT>
                        <p style={{ marginRight: '0.5em' }}><FiPhoneCall /></p>
                        <h3>Call Us : +00 11223344</h3>
                    </ELEMENT>
                    <ELEMENT >
                        <p style={{ marginRight: '0.5em' }}><AiOutlineMail /></p>
                        <h3>Email Us : electronic-manufacture@yahoo.com</h3>
                    </ELEMENT>
                    <ELEMENT >
                        <p style={{ marginRight: '0.5em' }}><GoLocation /></p>
                        <h3>Address : 88 Mist Street, USA</h3>
                    </ELEMENT>
                </Box>
                <Box sx={{ padding: '1em', margin: '0.5em' }}>
                    <TITLE >Our Services</TITLE>
                    <div >
                        <p>&#8658; Lorem ipsum dolor sit. </p>
                        <p>&#8658; Lorem ipsum dolor sit. </p>
                    </div>
                </Box>
                <Box sx={{ padding: '1em', margin: '0.5em' }}>
                    <TITLE >Quick Links</TITLE>
                    <div>
                        <p>&#8658; About Company </p>
                        <p>&#8658; Latest Projects</p>
                        <p>&#8658; Our Mission</p>
                        <p>&#8658; Contact Us</p>
                    </div>
                </Box>
                <Box sx={{ padding: '1em', margin: '0.5em' }}>
                    <TITLE>Follow Us</TITLE>
                    <Stack direction={'row'} spacing={1} >
                        <Button variant='outlined' ><FaFacebook size={18} /></Button>
                        <Button variant='outlined' ><FaLinkedin size={18} /></Button>
                        <Button variant='outlined' ><FaTwitter size={18} /></Button>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ padding: '0.7em', }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Copyright &copy; 2022. All right reserved by <span>Drone Manufacturing</span></Typography>
            </Box>
        </Box>
    );
};

export default Footer;