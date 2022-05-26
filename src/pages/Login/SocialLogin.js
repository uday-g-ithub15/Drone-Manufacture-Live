import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='my-2'>
            <button className='flex items-center btn btn-primary' onClick={() => signInWithGoogle()}><span className='text-2xl' > <AiOutlineGoogle /></span><span>Sign In with Google</span></button>
        </div>
    );
};

export default SocialLogin;