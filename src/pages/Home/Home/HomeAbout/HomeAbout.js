import React from 'react';
import aboutImg from '../../../../assets/about-1.png';
import { HiOutlineCheckCircle } from "react-icons/hi";


const HomeAbout = () => {
    return (
        <div className='mx-[8%] my-9'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex items-center'>
                    <div>
                    <img src={aboutImg} alt="" className='w-[300px] md:w-full'/>
                    </div>
                    <div className='-mt-64 md:-mt-72 -ml-44 md:-ml-52 px-5  py-6 lg:px-9 lg:py-8 rounded-3xl' style={{backgroundColor: '#8fc424'}}>
                        <h1 className='text-white'> <span className='md:text-6xl font-bold'>20</span> <br /> <span className='font-semibold lg:font-bold'>Years Experience</span></h1>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h3 className='font-bold text-2xl title-color'>{'//'} <span className='mx-3'>About Us</span> {'//'}</h3>
                    <h1 className='my-3 text-4xl lg:text-6xl font-bold lg:w-3/4 text-secondary'>Best Agency For Your Pet <span className='round-box'></span></h1>
                    <p className='my-5 text-justify lg:w-3/4 text-gray-600'>Pet Care Management System (PCMS) is dedicated to simplifying pet care for owners everywhere. Our platform offers a comprehensive solution for pet health and wellness, providing access to nutritious food, essential medicines, and professional veterinary services. With a user-friendly interface and reliable resources, PCMS ensures your pets receive the best care, whether you're in a bustling city or a small town.</p>
                    <div className='grid grid-cols-2 gap-4 lg:w-3/4'>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Certified Veterinarians</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Passionate Animal Lovers</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>5+ Years of Service</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Comprehensive Care</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;