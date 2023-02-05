import { Box, Button, Stack, TextField, Typography } from '@mui/material';
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
            toast.error(`You can't order less than ${min} quantity `)
            return;
        }
        else if (userQuantity > stock) {
            toast.error(`Sorry, we have only ${stock} products in stock `)
            return
        }
        else if (userQuantity <= 0) {
            toast.error(`Please provide a valid quantity`)
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

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} >
            <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center', }} >
                    <img width='80%' src={picture} alt='Product Demo' />
                </Box>
                <Stack spacing={2} sx={{ width: '80%', marginTop: '1em' }}>
                    <h3>Name : {name}</h3>
                    <p>Description : {desc}</p>
                    <p>Price : ${price}</p>
                    <p>Minimum Order : {min}</p>
                    <p>In Stock : {newStock}</p>

                </Stack>
            </Box>
            <Box sx={{ flex: '1', padding: '3em 2em' }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography mb={3} variant='h4' >Buyer & Product information</Typography>
                    <Stack spacing={2}>
                        <TextField
                            {...register("name")}
                            id="outlined-read-only-input"
                            label="Buyer name ...."
                            defaultValue={user?.displayName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            type={'email'} {...register("email")}
                            id="outlined-read-only-input"
                            label="Buyer Email ...."
                            defaultValue={user?.email}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Order Quantity"
                            defaultValue={min}
                            type="number"
                            {...register("quantity")}
                        />
                    </Stack>
                    <Stack mt={1} spacing={1}>
                        <Button variant='contained' type='submit'>Purchase</Button>
                        <Button variant='outlined' onClick={() => navigate('/')} >Go to home</Button>
                    </Stack>
                </form>
            </Box>
        </Box>

    );
};

export default Purchase;