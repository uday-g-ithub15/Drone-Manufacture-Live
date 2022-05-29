import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const { admin } = useAdmin(user);
    if (loading) {
        return <Loading />
    }
    return (
        <section>
            <Navbar />
            <section className='mt-24  w-full '>
                <div class="drawer drawer-mobile  overflow-y-scroll">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <h1 className='text-accent text-3xl'>Dashboard</h1>
                        <Outlet />
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-slate-200 text-accent">
                            <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard'>My Profile</Link></li>
                            {!admin && <>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/reviews'>My Review</Link></li>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/myorder'>My Orders</Link></li>
                            </>}
                            {admin && <>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/addproduct'>Add a product</Link></li>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/manageuser'>Manage Users</Link></li>
                                <li className='hover:bg-slate-500 duration-500'><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                            </>}
                        </ul>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default Dashboard;