import { Button, Chip, Divider, Typography, Box, TextField, styled } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [
        signInWithEmailAndPassword,
        userLogin,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    const { token } = useToken(userLogin || user)
    let err;
    const onSubmit = async (e) => {
        if (email === '') {
            err = 'Email is required'
        }
        else if (pass === '') { err = 'Password is required' }
        else {
            err = ''
            await signInWithEmailAndPassword(email, pass);
        }

    };
    if (loading) {
        return <Loading />
    }
    if (error) {
        if (error.code === 'auth/wrong-password') {
            err = 'Password not matched';
        }
        else if (error.code === 'auth/user-not-found') {
            err = 'Email not found';
        }
        else {
            err = '';
        }
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const TEXTFIELD = styled(TextField)({
        margin: '0.5em 0',
    })
    return (
        <>
            <Navbar />
            <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', backgroundColor: '#ede9e4', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '1em' }} >
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Typography variant='h4'>Please Login</Typography>
                    <TEXTFIELD type={'email'} required id="standard-basic" label="Your Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                    <TEXTFIELD type={'password'} required id="standard-basic" label="Your Password" variant="standard" onChange={(e) => setPass(e.target.value)} />
                    <Button variant='contained' type='submit' >LOGIN</Button>
                    {<Typography sx={{ color: 'red', mb: '1em' }} >{err}</Typography>}
                    <Typography variant='p' component='p' sx={{ marginTop: '1em' }}>Don't have an account ? <Link style={{ color: 'blue' }} to={'/register'}>Sign Up</Link></Typography>
                </form>
                <Divider sx={{ marginTop: '0.5em' }}>
                    <Chip label="OR" />
                </Divider>
                <SocialLogin />
            </Box>
        </>
    );
};

export default Login;