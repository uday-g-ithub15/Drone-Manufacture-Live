import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Header/Navbar';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async (data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.pass);
        await updateProfile({ displayName: data.name })

    };
    if (loading || updating) {
        return <Loading />
    }
    return (
        <>
            <Navbar />
            <div className='w-full h-screen flex flex-col justify-center items-center fixed'>
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
                        }, pattern: {
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
                    <input className='btn block btn-primary' type="submit" />
                </form>
            </div>
        </>
    );
};

export default Register;