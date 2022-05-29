import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Header/Navbar';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useToken from '../../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm();
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
    const onSubmit = async (data, e) => {
        console.log(data, e)
        await createUserWithEmailAndPassword(data.email, data.pass);
        await updateProfile({ displayName: data.name })

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
    return (
        <>
            <Navbar />
            <div className='w-full h-screen flex flex-col justify-center items-center mt-12'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl text-accent'>Please Register</h1>
                    <label className="label">
                        <span className="label-text ">Enter your name ....</span>
                    </label>
                    <input type={'text'} className="input input-bordered input-info w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} placeholder='Enter your name ....' />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">Name is required</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Enter your email</span>
                    </label>
                    <input className="input input-bordered input-info w-full max-w-xs" type={'email'} {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Enter a valid email'
                        }
                    })} />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                            },
                            pattern: {
                                value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: 'Password must contain a letter, a number, a special char and minimum 8 char'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.pass?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pass.message}</span>}
                        {errors.pass?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.pass.message}</span>}
                    </label>
                    {<p className='text-red-500 mb-2'>{err}</p>}
                    <input className='btn block btn-primary' type="submit" />
                    <p className='text-accent mt-2'>Already have an account ? <Link className='text-primary' to={'/login'}>Sign In</Link></p>
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

export default Register;