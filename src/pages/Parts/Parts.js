import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const navigate = useNavigate();
    const { data: parts, isLoading, refetch } = useParts(`https://drone-manufacture-server.vercel.app/parts`)
    if (isLoading) {
        return <Loading />
    }
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
        refetch()
    }
    return (
        <>
            <Navbar />
            <Box sx={{ padding: '1em 0.5em' }}>
                <Typography sx={{ margin: '0.5em 0' }} variant='h4'>PARTS</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' } }}>
                    {
                        parts.map(part => <Part part={part} key={part._id} handlePurchase={handlePurchase} />)
                    }
                </Box>
            </Box>
        </>
    );
};

export default Parts;