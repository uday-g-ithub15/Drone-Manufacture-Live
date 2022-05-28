import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './MyOrder.css'

const MyOrders = () => {
    const [user, userLoading] = useAuthState(auth)
    const email = user?.email;
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`).then(res => res.json()).then(data => setOrders(data))

    }, [email])
    if (userLoading) {
        return <Loading />
    }
    const handleCancel = id => {
        console.log(id);
    }
    return (
        <table>
            <thead>
                <tr>
                    <th  ></th>
                    <th  >Name</th>
                    <th  >Quantity</th>
                    <th  >Status</th>
                    <th  >Cancelation</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => <tr key={order._id}>
                        <td  >{index + 1}</td>
                        <td  >{order.name}</td>
                        <td  >{order.orderQuantity}</td>
                        <td  >UnPaid</td>
                        <td  ><button onClick={() => handleCancel(order._id)} className='btn btn-sm bg-stone-700 text-slate-200 font-semibold'>Cancel Order</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default MyOrders;