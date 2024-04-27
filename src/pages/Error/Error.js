import React from 'react';
import errorImage from '../../assets/error_img.png'
import AppointmentButton from '../../components/AppointmentButton/AppointmentButton';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div  className='mx-[10%] my-20'>
            <div>
                <img src={errorImage} alt="" className='h-full w-full'/>
            </div>
            <h1 className="text-7xl font-bold text-secondary text-center">OOPS! Nothing Was Found</h1>
            <div className='text-center my-16'>
            <Link to='/'>
            <AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`Back To Home Page`}></AppointmentButton>
            </Link>
            </div>
        </div>
    );
};

export default Error;