import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        userLogin,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    let err;
    const onSubmit = async (data, e) => {
        await signInWithEmailAndPassword(data.email, data.pass);

    };
    if (loading) {
        return <Loading />
    }
    if (error) {
        console.log(error.code)
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
    if (userLogin || user) {
        navigate(from, { replace: true });
    }
    return (
        <>
            <Navbar />
            <div className='w-full h-screen flex flex-col justify-center items-center mt-12'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl text-accent'>Please Login</h1>
                    <label className="label">
                        <span className="label-text">Enter your email</span>
                    </label>
                    <input className="input input-bordered input-info w-full max-w-xs" type={'email'} {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        }
                    })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Your Password </span>
                    </label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered input-info w-full max-w-xs"
                        {...register("pass", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.pass?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pass.message}</span>}
                    </label>
                    {<p className='text-red-500 mb-2'>{err}</p>}
                    <input className='btn block btn-primary' type="submit" />
                    <p className='text-accent mt-2'>Don't have an account ? <Link className='text-primary' to={'/register'}>Sign Up</Link></p>
                </form>
                <div className='flex justify-center items-center '>
                    <div className='h-1 w-20 border-2 border-slate-500 mx-2'></div>
                    <div>Or</div>
                    <div className='h-1 w-20 border-2 border-slate-500 mx-2'></div>
                </div>
                <SocialLogin />
            </div>
        </>
    );
};

export default Login;