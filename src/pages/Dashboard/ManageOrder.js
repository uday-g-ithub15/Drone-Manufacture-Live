import React from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';

const ManageOrder = () => {
    const { data, isLoading } = useParts(`http://localhost:5000/allorders`)
    // const { data, isLoading } = useParts(`https://secret-everglades-45349.herokuapp.com/orders`)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>Manage Order : {data.length} </h1>
        </div>
    );
};

export default ManageOrder;