import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';

const Dashboard = () => {
    return (
        <section>
            <Navbar />
            <section className='mt-24 border-2 border-black '>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <h1 className='text-accent text-3xl'>Dashboard</h1>
                        <Outlet />
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                            <li ><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/reviews'>My Review</Link></li>
                            <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                        </ul>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default Dashboard;