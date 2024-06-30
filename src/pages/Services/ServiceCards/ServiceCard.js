import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, title, intro} = service;
    return (
        <div className='bg-white p-4 shadow-lg border-2 border-white'>
            <img src={img} alt="" className='hover:scale-110 duration-500'/>
            <h4 className="text-2xl font-bold text-secondary my-5">{title}</h4>
            <p className="text-secondary text-justify mb-10">{intro}</p>
            {/* <p className='my-5'><Link className='underline text-secondary font-semibold my-5'>Read More</Link></p> */}
        </div>
    );
};

export default ServiceCard;