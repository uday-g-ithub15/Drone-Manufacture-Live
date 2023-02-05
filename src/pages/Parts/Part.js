import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Part = ({ part, handlePurchase }) => {
    const { name, picture, price, minimumOrder: minOrder, available, description: desc, _id } = part
    return (
        <Box sx={{ padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ede9e4', margin: '0.2em' }}>
            <Box sx={{ flex: '1' }}>
                <img width={'100%'} style={{ border: '2px solid', borderRadius: '50%', marginBottom: '1em' }} src={picture} alt="" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', flex: '4', }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='h4'>{name}</Typography>
                <Typography variant='p'>{desc}</Typography>
                <Typography variant='p'>Price : ${price}(per unit)</Typography>
                <Typography variant='p'>Minimun Order : {minOrder}</Typography>
                <Typography variant='p'>In stock : {available}</Typography>
                <Button variant='contained' sx={{ marginTop: '0.5em' }} onClick={() => handlePurchase(_id)}  >Purchase</Button>
            </Box>
        </Box>
    );
};

export default Part;