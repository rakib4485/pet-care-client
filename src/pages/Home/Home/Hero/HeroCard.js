import React from 'react';
import AppointmentButton from '../../../../components/AppointmentButton/AppointmentButton';

const HeroCard = ({item}) => {
    const {header,boldText1,boldText2,bgImg} = item;
    return (
        <div className='py-32' style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <div className='ml-10 md:ml-24'>
                <h4 className='text-[#FF4880] text-lg md:text-xl font-bold'>// <span className='mx-4'>{header}</span> //</h4>
                <h5 className='text-4xl md:text-7xl font-bold text-[#393D72]'>{boldText1}</h5>
                <h4 className='text-4xl md:text-7xl font-bold text-[#393D72]'>{boldText2}<span className='text-[#FF4880] text-4xl md:text-8xl'>.</span></h4>
                <div className='flex gap-4 mt-10 flex-col md:flex-row'>
                <AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`Make Appointment`}></AppointmentButton>
                <AppointmentButton baseColor={`bg-[#8FC424]`} HoverColor={`bg-[#FF4880]`} buttonText={`+8801906283194`}></AppointmentButton>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;