import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import './BussinessSummary.css'

const BussinessSummary = () => {
    return (
        <section className='flex flex-col w-full  items-center justify-evenly lg:flex-row  p-14 mt-5 bg-primary text-white relative '>
            <div className='relative flex flex-col sm:items-center'>
                <h1 className="text-3xl font-semibold ">7500 <span className='absolute  -top-2 left-15 text-lg text-'><BsFillPlusCircleFill /></span></h1>
                <p className='font-medium'>Tools</p>

            </div>
            <hr className='block border-2 w-1/5 mb-5 mt-1 lg:hidden' />
            <div className="hidden lg:block divider-custom"></div>
            <div className='relative flex flex-col sm:items-center'>
                <h1 className="text-3xl font-semibold ">5500 <span className='absolute  -top-2 left-15 text-lg text-'><BsFillPlusCircleFill /></span></h1>
                <p className='font-medium'>Project Complete</p>

            </div>
            <hr className='block border-2 w-1/5 mb-5 mt-1 lg:hidden' />
            <div className="hidden lg:block divider-custom"></div>
            <div className='relative flex flex-col sm:items-center'>
                <h1 className="text-3xl font-semibold ">5800 <span className='absolute  -top-2 left-15 text-lg text-'><BsFillPlusCircleFill /></span></h1>
                <p className='font-medium'>Total Projects</p>

            </div>
            <hr className='block border-2 w-1/5 mb-5 mt-1 lg:hidden' />
            <div className="hidden lg:block divider-custom"></div>
            <div className='relative flex flex-col sm:items-center mb-2'>
                <h1 className="text-3xl font-semibold">7900 <span className='absolute  -top-2 left-15 text-lg text-'><BsFillPlusCircleFill /></span></h1>
                <p className='font-medium'>Team member</p>
            </div>
        </section>
    );
};

export default BussinessSummary;