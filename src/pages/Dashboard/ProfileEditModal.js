import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ProfileEditModal = ({ open, handleOpen, handleClose }) => {
    // const [displayName, setDisplayName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [linkedin, setLinkedin] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [user] = useAuthState(auth)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        gap: 3
    };
    if (updating) {
        return <p>Updating...</p>;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const phoneNumber = e.target.number.value;
        const linkedin = e.target.linkedin.value;
        const result = await updateProfile({ displayName, phoneNumber, photoURL: linkedin });
        if (result) {
            alert('Update Success');
        }
        handleClose()
    }
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack sx={style}>
                    <Typography variant='h5' >Update your details.</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField required id="outlined-basic" label="NAME" type={'text'} variant="outlined" name='name' />
                        <TextField required id="outlined-basic" label="NUMBER" type={'tel'} variant="outlined" name='number' />
                        <TextField required id="outlined-basic" label="LINKEDIN" type={'url'} variant="outlined" name='linkedin' />
                        <Button variant='contained' sx={{ p: 2 }} type='submit'  >SUBMIT</Button>
                    </form>
                    <Button variant='contained' sx={{ p: 2 }} onClick={handleClose} >CANCEL</Button>
                </Stack>
            </Modal>
        </Box>
    );
};

export default ProfileEditModal;