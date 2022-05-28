import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [signInWithGoogle, userGoogle, loading] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading />
    }
    if (user || userGoogle) {
        navigate(from, { replace: true });
    }
    return (
        <div className='my-2'>
            <button className='flex items-center btn btn-primary' onClick={() => signInWithGoogle()}><span className='text-2xl' > <AiOutlineGoogle /></span><span>Sign In with Google</span></button>
        </div>
    );
};

export default SocialLogin;