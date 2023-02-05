import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);
    const [vertical, horizontal] = ['top', 'right'];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const data = { name, email, message, subject: 'From Drone Manufacture' }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if ((name || email || message) === '') {
            setOpen(true)
            setSnackBarMessage('Please fill out all the fields')
            setSeverity('warning')
        }
        else {
            const sendEmail = await emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPELATE_KEY, data, process.env.REACT_APP_PUBLIC_KEY);
            if (sendEmail.status === 200) {
                setOpen(true)
                setSnackBarMessage('We receiverd your message. Thanks to stay with us.')
                setSeverity('success')
                e.target.reset()
            }
            else {
                setOpen(true)
                setSnackBarMessage(`We can't receive your message at this moment. Thanks to stay with us.`)
                setSeverity('error')
            }
        }
    }
    return (
        <Box sx={{ backgroundColor: '#ede9e4' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}

            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Box sx={{ margin: '1em 0', p: 2, display: 'flex', alignItems: { xs: '', md: 'center' }, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                <Typography variant='h4' sx={{ flex: 1 }}>Want to know more about us? Send Message. Have a good day.</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: 2, padding: '1em 0' }} component={'form'} onSubmit={handleSubmit} >
                    <TextField sx={{ width: '70%' }} id="outlined-basic" label="YOUR NAME" variant="outlined" type={'text'} onChange={(e) => setName(e.target.value)} />
                    <TextField sx={{ width: '70%' }} id="outlined-basic" label="EMAIL" variant="outlined" type={'email'} onChange={(e) => setEmail(e.target.value)} />
                    <TextField sx={{ width: '70%' }} id="outlined-basic" label="MESSAGE" variant="outlined" type={'text'} onChange={(e) => setMessage(e.target.value)} />
                    <Button variant='contained' type='submit' >SEND MESSAGE</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default GetInTouch;