import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ProfileEditModal from './ProfileEditModal';

const MyProfile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading />
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
    }
    return (
        <Box sx={{ border: 'solid black', padding: '1em' }} className='text-info text-xl'>
            <form onSubmit={handleUpdate}>
                <Typography variant='h5'><Typography>Name : </Typography> {user?.displayName}</Typography>
                <Typography variant='h5'><Typography>Email : </Typography> {user?.email}</Typography>
                <Typography variant='h5'><Typography>Mobile : </Typography> {user?.phoneNumber ? user?.phoneNumber : 'None'}</Typography>
                <Typography variant='h5'><Typography>Linkedin : </Typography> {user?.photoURL ? user?.photoURL : 'None'}</Typography>
                <Button variant='contained' sx={{ marginTop: '1em' }} onClick={handleOpen}>Edit</Button>
            </form>
            {open && <ProfileEditModal open={open} handleClose={handleClose} />}
        </Box>
    );
};

export default MyProfile;