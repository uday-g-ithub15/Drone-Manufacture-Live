import React from 'react';

const TeamMember = () => {
    return (
        <div>
            <h1 className='text-3xl text-info text-center'>Meet our awesome and expert senior member .</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-5' >
                <div className='flex flex-col items-center'>
                    <div> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-1.jpg" alt="" /> </div>
                    <div>
                        <h1 className='text-accent text-2xl'>Josette Wadsworth</h1>
                        <p className='text-sm text-accent'>Senior Engineer</p>
                        <button className='btn btn-secondary btn-sm'>Contact</button>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-2.jpg" alt="" /> </div>
                    <div>
                        <h1 className='text-accent text-2xl'>Stephen Robert</h1>
                        <p className='text-sm text-accent'>Senior Engineer</p>
                        <button className='btn btn-secondary btn-sm'>Contact</button>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div> <img src="https://hellloexpert.com/tf/html/endus/assets/images/team/img-3.jpg" alt="" /> </div>
                    <div>
                        <h1 className='text-accent text-2xl'>George Alex</h1>
                        <p className='text-sm text-accent'>Senior Engineer</p>
                        <button className='btn btn-secondary btn-sm'>Contact</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamMember;