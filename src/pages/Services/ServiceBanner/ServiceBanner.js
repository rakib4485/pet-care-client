import React from 'react';

const ServiceBanner = () => {
    return (
        <div>
            <div className='about-banner py-32'>
            <div className='backdrop-blur-sm bg-white/30 p-9 w-[200px] mx-auto flex justify-center items-center rounded-md mt-56'>
                <h1 className='text-center text-white font-semibold'>Home | <span className='text-secondary'>Service</span> </h1>
            </div>
            <h1 className='text-3xl lg:text-7xl font-bold text-white text-center mt-16'>What We Do</h1>
        </div>
        </div>
    );
};

export default ServiceBanner;