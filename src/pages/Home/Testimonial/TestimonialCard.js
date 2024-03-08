import React from 'react';

const TestimonialCard = ({item}) => {
    const {img, name, designation, comment} = item;
    return (
        <div className='flex gap-6 items-center'>
            <div className='w-[600px]'>
                <img src={img} alt="" className='w-full' />
            </div>
            <div>
                <h4 className='text-3xl font-bold'>{name}</h4>
                <h4 className="text-xl text-[#FF4880] font-semibold">{designation}</h4>
                <p className="text-xl">{comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;