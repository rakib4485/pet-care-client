import React from 'react';
import banner from '../../../assets/appointment-banner.jpg'

const AppointmentBanner = () => {
    return (
        <div>
            <img src={banner} alt='' className='h-[600px] w-full'/>
        </div>
    );
};

export default AppointmentBanner;