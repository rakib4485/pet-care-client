import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClipboard } from "react-icons/fa";

const DoctorCard = ({doctor}) => {
    const {_id, name, image, prices} = doctor;
    return (
        <div className='p-4 hover:shadow-xl rounded-md  cursor-pointer border'>
        <Link to={`/doctors/${_id}`}>
            <div>
                <img src={image} alt="" className='rounded-md h-[350px] mx-auto' />
            </div>
            <div className='my-5'>
                <h4 className="text-xl font-bold text-secondary  hover:text-primary">{name}</h4>
                <p className=" font-semibold text-sm">M.A,DHMS, RHMP</p>
                <p className=" text-primary font-semibold text-xl"><span className='text-3xl'>৳</span>{prices}</p>
                <p className="font-semibold flex items-center gap-4 mt-2"><span className=''><FaRegClipboard/></span> <span className='text-emerald-500'>Available Today</span></p>
            </div>
        </Link>
    </div>
    );
};

export default DoctorCard;