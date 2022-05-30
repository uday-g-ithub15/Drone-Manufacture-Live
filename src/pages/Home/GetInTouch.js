import React from 'react';

const GetInTouch = () => {
    return (
        <div className=' my-5 p-10 flex flex-col items-center'>
            <h1 className='text-primary text-lg '>Get In Touch</h1>
            <form >
                <input type="text" className='block border border-primary mb-2 p-2' placeholder='Your Name' />
                <input type="email" className='block border border-primary mb-2 p-2' placeholder='Your Email' />
                <input type="tel" className='block border border-primary mb-2 p-2' placeholder='Your Phone' />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
        </div>
    );
};

export default GetInTouch;