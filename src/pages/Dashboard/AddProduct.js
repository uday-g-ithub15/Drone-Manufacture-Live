import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = async (data, e) => {
        const name = e.target.partsname.value;
        const price = parseInt(e.target.price.value);
        const available = parseInt(e.target.stock.value);
        const minimumOrder = parseInt(e.target.minorder.value);
        const description = e.target.desc.value;
        const picture = e.target.picture.value;
        const part = { picture, price, minimumOrder, available, name, description }
        fetch(`http://localhost:5000/parts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(part)
        })
        console.log(part);

    };
    return (
        <div className='text-info'>
            <h1 className='text-info text-2xl'>Add a new product product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-info">Admin Name</span>
                </label>
                <input type={'text'} className="input input-bordered input-info w-full max-w-xs text-info" {...register("name")} value={user?.displayName} readOnly />
                <label className="label">
                    <span className="label-text text-info">Admin Email</span>
                </label>
                <input type={'text'} className="input input-bordered input-info w-full max-w-xs text-info" {...register("email")} value={user?.email} readOnly />

                <label className="label">
                    <span className="label-text text-info">Enter Parts Name</span>
                </label>
                <input className="input input-bordered input-info w-full max-w-xs" type={'text'} placeholder='Parts Name' {...register("partsname", {
                    required: {
                        value: true,
                        message: 'Parts name is required'
                    }
                })} />
                <label className="label">
                    {errors.partsname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.partsname.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-info">Part price </span>
                </label>
                <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Part price is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-info">In Stock </span>
                </label>
                <input
                    type="number"
                    placeholder="In Stock"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("stock", {
                        required: {
                            value: true,
                            message: 'Stock quantity is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-info">Minimum Order </span>
                </label>
                <input
                    type="number"
                    placeholder="Minimum Order"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("minorder", {
                        required: {
                            value: true,
                            message: 'Minimum Order is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.minorder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minorder.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-info">Picture </span>
                </label>
                <input
                    type="text"
                    placeholder="Picture Link"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("picture", {
                        required: {
                            value: true,
                            message: 'Picture is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-info">Description </span>
                </label>
                <textarea
                    placeholder="Description"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("desc", {
                        required: {
                            value: true,
                            message: 'Description is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.desc?.type === 'required' && <span className="label-text-alt text-red-500">{errors.desc.message}</span>}
                </label>
                <input className='btn block btn-primary' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;