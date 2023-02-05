import React, { useEffect } from 'react';
import Navbar from '../Shared/Header/Navbar';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useToken from '../../hooks/useToken';
import { Box, Button, Chip, Divider, styled, TextField, Typography } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        userCreate,
        loadingCreate,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [user, loading] = useAuthState(auth)
    const { token } = useToken(userCreate || user)
    const from = location.state?.from?.pathname || "/";
    let err;
    const [updateProfile, updating] = useUpdateProfile(auth);
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.pass.value
        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: name })

    };
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading || updating || loadingCreate) {
        return <Loading />
    }
    if (createError) {
        if (createError.code === 'auth/email-already-in-use') {
            err = 'User already exist'
        }
        else {
            err = '';
        }
    }
    const TEXTFIELD = styled(TextField)({
        margin: '0.2em 0',
    })
    return (
        <>
            <Navbar />
            <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', backgroundColor: '#ede9e4', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '' }} >
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                    <Typography sx={{}} variant='h4'  >Please Register</Typography>
                    <TEXTFIELD type={'text'} required id="standard-basic" label="Your Name" name='name' variant="standard" />
                    <TEXTFIELD type={'email'} required id="standard-basic" label="Your Email" name='email' variant="standard" />
                    <TEXTFIELD type={'password'} required id="standard-basic" label="Your Password" name='pass' variant="standard" />
                    {<Typography sx={{ color: 'red', mb: '1em' }} variant='p' >{err}</Typography>}
                    <Button variant='contained' type='submit'>SUBMIT</Button>
                </form>
                <Typography sx={{ mt: '1em' }} variant='p' component='p' >Already have an account ? <Link className='text-primary' to={'/login'}>Sign In</Link></Typography>
                <Divider sx={{ marginTop: '0.5em' }}>
                    <Chip label="OR" />
                </Divider>
                <SocialLogin />
            </Box>
        </>
    );
};

export default Register;