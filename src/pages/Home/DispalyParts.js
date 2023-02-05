import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';
import DisplayPart from './DisplayPart';

const Parts = () => {
    const navigate = useNavigate();
    const { data: parts, isLoading, refetch } = useParts(`http://localhost:5000/parts`)
    if (isLoading) {
        return <Loading />
    }
    const rev = [...parts].reverse().slice(0, 6)
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
        refetch()
    }
    return (
        <Box sx={{ margin: '1em 0' }}>
            <Typography variant='h4' sx={{ color: 'black' }}>PARTS</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: '10px' }} >
                {
                    rev.map(part => <DisplayPart part={part} key={part._id} handlePurchase={handlePurchase} />)
                }
            </Box>
        </Box>
    );
};

export default Parts;