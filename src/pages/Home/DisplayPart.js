import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Part = ({ part, handlePurchase }) => {
    const { name, picture, price, minimumOrder: minOrder, available, description: desc, _id } = part
    return (
        <Box sx={{ padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', color: 'black', backgroundColor: '#ede9e4' }}>
            <Box sx={{ flex: 1 }}>
                <img style={{ width: '80%', display: 'block', margin: '0 auto', marginBottom: '0.5em', border: '2px double' }} src={picture} alt={name} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', flex: '4' }} >
                <Typography variant='h4' >{name}</Typography>
                <Typography varian='p'>{desc}</Typography>
                <Typography varian='p'>Price : ${price}(per unit)</Typography>
                <Typography varian='p'>Minimun Order : {minOrder}</Typography>
                <Typography varian='p'>In stock : {available}</Typography>
                <Button onClick={() => handlePurchase(_id)} variant='contained' sx={{ marginTop: '0.5em' }}>Purchase</Button>
            </Box>
        </Box>
    );
};

export default Part;