import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { PiDog } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";

const Awards = () => {
    return (
        <div className='my-9 awards-bg py-36'>
            <div className='mx-[9%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center'>
                <div className='flex items-center gap-4'>
                    <div>
                    <FaUserDoctor className='text-primary text-6xl font-bold' />
                    </div>
                    <div className='text-white'>
                        <h1 className='text-5xl font-bold'>730+</h1>
                        <h3 className='text-2xl font-bold mt-3'>Happy Clients</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                    <FaAward className='text-primary text-5xl font-bold' />
                    </div>
                    <div className='text-white'>
                        <h1 className='text-5xl font-bold'>80+</h1>
                        <h3 className='text-2xl font-bold mt-3'>Professionals</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                    <PiDog className='text-primary text-6xl font-bold' />
                    </div>
                    <div className='text-white'>
                        <h1 className='text-5xl font-bold'>820+</h1>
                        <h3 className='text-2xl font-bold mt-3'>Adopted Pets</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                    <CiTrophy className='text-primary text-6xl font-bold' />
                    </div>
                    <div className='text-white'>
                        <h1 className='text-5xl font-bold'>90+</h1>
                        <h3 className='text-2xl font-bold mt-3'>Awards</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;