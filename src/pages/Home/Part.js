import React from 'react';

const Part = ({ part, handlePurchase }) => {
    const { name, picture, price, minimumOrder: minOrder, available, description: desc, _id } = part
    return (
        <div className='p-5 flex flex-col items-center justify-center text-black '>
            <div className='grow-[1]'>
                <img className='w-full rounded-full border-2' src={picture} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center grow-[4]'>
                <h2 className='text-3xl font-bold'>{name}</h2>
                <p>{desc}</p>
                <p>Price : ${price}(per unit)</p>
                <p>Minimun Order : {minOrder}</p>
                <p>In stock : {available}</p>
                <button onClick={() => handlePurchase(_id)} className='btn btn-primary mt-2' >Purchase</button>
            </div>
        </div>
    );
};

export default Part;