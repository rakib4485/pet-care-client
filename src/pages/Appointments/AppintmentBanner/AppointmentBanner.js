import React from 'react';
import banner from '../../../assets/appointment-banner.jpg'

const AppointmentBanner = () => {
    return (
        <div>
            <img src={banner} alt='' className='h-[400px] lg:h-[600px] w-full'/>
        </div>
    );
};

export default AppointmentBanner;