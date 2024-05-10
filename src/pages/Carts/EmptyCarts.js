import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import AppointmentButton from '../../components/AppointmentButton/AppointmentButton';

const EmptyCarts = () => {
    return (
        <div className='my-20'>
            <div className='flex justify-center'><TiShoppingCart className='text-9xl'></TiShoppingCart></div>
            <h3 className='text-center text-xl'>Your cart is currently empty.</h3>
            <p className='text-center mt-10'><Link to='/'>
                <AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`Return To Home`}></AppointmentButton>
                </Link></p>
        </div>
    );
};

export default EmptyCarts;