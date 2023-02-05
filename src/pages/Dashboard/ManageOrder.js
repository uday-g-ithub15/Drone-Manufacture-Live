import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://drone-manufacture-server.vercel.app/orders`).then(res => res.json()).then(data => {
            setOrders(data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <Loading />
    }
    // setorders(...data)
    const handleCancel = id => {
        fetch(`https://drone-manufacture-server.vercel.app/parts/${id}`, {
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
            </tbody>
        </table>
    );
};

export default ManageOrder;