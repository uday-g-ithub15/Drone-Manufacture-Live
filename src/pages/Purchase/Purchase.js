import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { id } = useParams()
    const [user, userLoading] = useAuthState(auth);
    const [part, setPart] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`).then(res => res.json()).then(data => setPart(data))
    }, [id])
    const { name, picture, price, minimumOrder: min, description: desc, available: stock } = part;
    const [newStock, setNewStock] = useState(stock);
    useEffect(() => setNewStock(stock), [stock])
    const onSubmit = async (data, e) => {
        e.preventDefault();
        const email = user.email;
        const userQuantity = e.target.quantity.value;
        if (parseInt(userQuantity) < parseInt(min)) {
            toast.error(`You can't order less than minimum(${min}) quantity `)
            return;
        }
        else if (userQuantity > stock) {
            toast.error(`Sorry, we have only ${stock} products in stock `)
            return
        }
        setNewStock(newStock - userQuantity)
        const product = { picture, price, orderQuantity: userQuantity, name, description: desc, email }
        fetch(`http://localhost:5000/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
        toast.success('Order Successful')

        fetch(`http://localhost:5000/parts/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newStock, userQuantity })

        })
    };
    if (userLoading) {
        return <Loading />
    }
    return (
        <div class="hero min-h-screen w-4/5 mx-auto">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                <div class="sm:text-center flex-col items-center lg:flex-row">
                    <div className='mr-2'>
                        <img src={picture} alt='Product Demo' />
                    </div>
                    <div className='text-xl text-accent font-semibold ml-2'>
                        <h4>Name : {name}</h4>
                        <h4>Description : {desc}</h4>
                        <h4>Price : ${price}</h4>
                        <h4>Minimum Order : {min}</h4>
                        <h4>In Stock : {newStock}</h4>

                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div class="card-body text-accent">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-3xl text-accent'>Buyer & Product information</h1>
                            <label className="label">
                                <span className="label-text text-accent">Buyer name ....</span>
                            </label>
                            <input type={'text'} className="input input-bordered input-info w-full max-w-xs" {...register("name")} value={user.displayName} readOnly />

                            <label className="label">
                                <span className="label-text text-accent">Buyer email</span>
                            </label>
                            <input className="input input-bordered input-info w-full max-w-xs" type={'email'} {...register("email")} value={user.email} readOnly />
                            <label className="label">
                                <span className="label-text text-accent">Parts </span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered input-info w-full max-w-xs"
                                {...register("part")} value={part.name} readOnly
                            />
                            <label className="label">
                                <span className="label-text text-accent">Order Quantity </span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered input-info w-full max-w-xs"
                                {...register("quantity")} defaultValue={min}
                            />
                            <input className='btn block btn-primary my-2' type="submit" value={'Purchase'} />
                            <input className='btn block btn-primary' type="button" onClick={() => navigate('/')} value={'Go to home'} />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;