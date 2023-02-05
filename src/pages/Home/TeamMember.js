import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';

const TeamMember = () => {
    const MEMBER_CONTAINER = styled(Box)({
        margin: '0.5em',
        backgroundColor: '#ede9e4',
        padding: '0.5em'
    })
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>Meet our awesome and expert senior member .</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }} >
                <MEMBER_CONTAINER>
                    <Box> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-1.jpg" alt="" /> </Box>
                    <div>
                        <Typography variant='h5' >Josette Wadsworth</Typography>
                        <Typography variant='small' sx={{ display: 'block' }}>Senior Engineer</Typography>
                        <Button sx={{ margin: '0.5em 0' }} variant='contained'>Contact</Button>
                    </div>
                </MEMBER_CONTAINER>
                <MEMBER_CONTAINER>
                    <div> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-2.jpg" alt="" /> </div>
                    <div>
                        <Typography variant='h5' >Stephen Robert</Typography>
                        <Typography variant='small' sx={{ display: 'block' }}>Senior Engineer</Typography>
                        <Button sx={{ margin: '0.5em 0' }} variant='contained'>Contact</Button>
                    </div>
                </MEMBER_CONTAINER>
                <MEMBER_CONTAINER>
                    <div> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-3.jpg" alt="" /> </div>
                    <div>
                        <Typography variant='h5' >George Alex</Typography>
                        <Typography variant='small' sx={{ display: 'block' }}>Senior Engineer</Typography>
                        <Button sx={{ margin: '0.5em 0' }} variant='contained'>Contact</Button>
                    </div>
                </MEMBER_CONTAINER>

            </Box>
        </Box>
    );
};

export default TeamMember;