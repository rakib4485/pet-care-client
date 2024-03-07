import React from 'react';
import aboutImg from '../../../../assets/about-1.png';
import { HiOutlineCheckCircle } from "react-icons/hi";


const About = () => {
    return (
        <div className='mx-[8%] my-9'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex items-center'>
                    <div>
                    <img src={aboutImg} alt="" />
                    </div>
                    <div className='-mt-72 -ml-52 px-5  py-6 lg:px-9 lg:py-8 rounded-3xl' style={{backgroundColor: '#8fc424'}}>
                        <h1 className='text-white'> <span className='text-6xl font-bold'>20</span> <br /> <span className='font-semibold lg:font-bold'>Years Experience</span></h1>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h3 className='font-bold text-4xl title-color'>// About Us //</h3>
                    <h1 className='my-3 text-4xl lg:text-6xl font-bold lg:w-3/4 text-blue-900'>Best Agency For Your Pet <span className='round-box'></span></h1>
                    <p className='my-5 text-justify lg:w-3/4 text-gray-600'>We've been setting new standards for pet-care facilities. Individual suites are offered in all CarePress locations, and they are spotless and climate controlled, with excellent food, bedding, and a broad variety of tailored activities and services. You can rest assured that your dog is in the best, most qualified hands in the industry with CarePress.We've been providing entertaining and dependable dog care services to parents and puppies since 1999.</p>
                    <div className='grid grid-cols-2 gap-4 lg:w-3/4'>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Certified Groomer</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Animal Lover</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>14+ Years of Experience</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='about-bg p-2 text-white rounded-xl'>
                            <HiOutlineCheckCircle />
                            </div>
                            <div>
                                <h3 className='font-semibold'>Pet Parent of 3 Dogs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;