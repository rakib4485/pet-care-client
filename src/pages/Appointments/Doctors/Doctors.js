import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DoctorCard from '../../../components/DoctorCard/DoctorCard';
import Loader from '../../../components/Loader/Loader';

const Doctors = () => {
    const {data: doctors = [], isLoading} = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-gamma.vercel.app/appointmentOption');
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
                    doctors.map(product => <DoctorCard 
                        key={product._id}
                        doctor={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Doctors;