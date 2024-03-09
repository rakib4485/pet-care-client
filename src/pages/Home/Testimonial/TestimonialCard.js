import React from 'react';

const TestimonialCard = ({item}) => {
    const {img, name, designation, comment} = item;
    return (
        <div className='flex gap-6 items-center flex-col md:flex-row'>
            <div className='md:w-[600px]'>
                <img src={img} alt="" className='w-full' />
            </div>
            <div>
                <h4 className='text-xl md:text-3xl font-bold'>{name}</h4>
                <h4 className="text-md md:text-xl text-[#FF4880] font-semibold my-3">{designation}</h4>
                <p className=" md:text-xl">{comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;