import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [disable, setDisable] = useState(true)
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading />
    }
    console.log(user)
    const handleUpdate = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='text-info text-xl'>
            <form onSubmit={handleUpdate}>
                <h1>Name : {user?.displayName}</h1>
                <h1>Email : {user?.email}</h1>
                {/* <h1>Address : {user?.}</h1> */}
                <h1>Phone : <input className='border border-info' disabled={disable} type={'tel'} placeholder='Phone' name='mobile' /></h1>
                <h1>Linkedin : <input className='border border-info' disabled={disable} type={'text'} placeholder='Linkedin' name='in' /></h1>
                <button className='btn btn-primary mt-2' onClick={() => setDisable(!disable)}>Edit</button>
                {!disable && <input className='btn btn-primary' type={'submit'} value='Submit' />}
            </form>
        </div>
    );
};

export default MyProfile;