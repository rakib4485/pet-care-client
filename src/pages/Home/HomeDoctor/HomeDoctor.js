import React from 'react';
import DoctorCard from '../../../components/DoctorCard/DoctorCard';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';

const HomeDoctor = () => {
    const {data: doctors = [], isLoading} = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOption');
            const data = await res.json()
            return data;
        }
    })
    console.log(doctors)
    if(isLoading){
        return <Loader/>
    }
    return (
        <div className='my-20 mx-[10%]'>
            <h2 className='text-center text-5xl font-bold text-secondary my-10'>Meet Our Professionals</h2>
            <div className='grid grid-cols-4 gap-6'>
                {
                    [...doctors].slice(0,4).map(product => <DoctorCard 
                        key={product._id}
                        doctor={product}
                    />)
                }
            </div>
            <div className='text-center my-10'><Link to='/appointments' className='btn hover:bg-black hover:text-white'>View More Doctors</Link></div>
        </div>
    );
};

export default HomeDoctor;