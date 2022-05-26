import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const navigate = useNavigate();
    const { data: parts, isLoading, refetch } = useParts(`http://localhost:5000/parts`)
    if (isLoading) {
        return <Loading />
    }
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
            {
                parts.map(part => <Part part={part} key={part._id} handlePurchase={handlePurchase} />)
            }
        </section>
    );
};

export default Parts;