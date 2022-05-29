import React, { useEffect } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [signInWithGoogle, userGoogle, loading] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const { token } = useToken(userGoogle || user)
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading) {
        return <Loading />
    }
    return (
        <div className='my-2'>
            <button className='flex items-center btn btn-primary' onClick={() => signInWithGoogle()}><span className='text-2xl' > <AiOutlineGoogle /></span><span>Sign In with Google</span></button>
        </div>
    );
};

export default SocialLogin;