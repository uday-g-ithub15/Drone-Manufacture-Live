import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './MyOrder.css'

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, userLoading] = useAuthState(auth)
    const email = user?.email;
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
                localStorage.removeItem('accessToken')
                toast.error('Something went wrong, please login again')
            }
            return res.json()
        }).then(data => setOrders(data))

    }, [email, user, navigate])
    if (userLoading) {
        return <Loading />
    }
    const handleCancel = id => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(data => {
            const rest = orders.filter(order => order._id !== id)
            setOrders(rest)
        })
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
                        <td  ><label htmlFor=" confirm-modal" className='btn btn-sm bg-stone-700 text-slate-200 font-semibold'>Cancel Order</label>

                        </td>
                        <input type="checkbox" id=" confirm-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Are you sure you want to cancel this order ? </h3>
                                <div class="modal-action">
                                    <label htmlFor=" confirm-modal" class="btn btn-primary text-white font-bold" onClick={() => handleCancel(order._id)}>Yes</label>
                                    <label htmlFor=" confirm-modal" class="btn btn-primary text-white font-bold">Not now</label>
                                </div>
                            </div>
                        </div>
                    </tr>)
                }
                {/* <input type="checkbox" id=" confirm-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Are you sure you want to cancel this order ? </h3>
                        <div class="modal-action">
                            <label htmlFor=" confirm-modal" class="btn btn-primary text-white font-bold">Yes</label>
                            <label htmlFor=" confirm-modal" class="btn btn-primary text-white font-bold">Not now</label>
                        </div>
                    </div>
                </div> */}
            </tbody>
        </table>
    );
};

export default MyOrders;