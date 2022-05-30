// import React, { useState } from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const { data: orders, isLoading, refetch } = useParts(`https://secret-everglades-45349.herokuapp.com//parts`)
    if (isLoading) {
        return <Loading />
    }
    const handleCancel = id => {
        fetch(`https://secret-everglades-45349.herokuapp.com//part/${id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(data => {
            refetch()
        })
    }
    return (
        <table>
            <thead>
                <tr>
                    <th  ></th>
                    <th  >Name</th>
                    <th  >Status</th>
                    <th  >Delete Product</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => <tr key={order._id}>
                        <td  >{index + 1}</td>
                        <td  >{order.name}</td>
                        <td  >UnPaid</td>
                        <td  ><label htmlFor=" confirm-modal" className='btn btn-sm bg-stone-700 text-slate-200 font-semibold'>Delete</label>

                        </td>
                        <input type="checkbox" id=" confirm-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Are you sure you want to delete this product ? </h3>
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

export default ManageProduct;