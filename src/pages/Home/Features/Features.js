import React from 'react';
import featureImg from '../../../assets/feautres-style.jpg';
import dogEat from '../../../assets/dog-eat-box.png';
import featureOne from '../../../assets/features-1.png';
import featureTwo from '../../../assets/features-2.png';

const Features = () => {
    return (
        <div className=' bg-[#F4F2EF] py-16 px-10'>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
                    <div className='flex'>
                        <div className='relative'>
                        <img src={featureImg} alt="" className='ml-5'/>
                        <img className='absolute bottom-4 -left-36 z-50' src={dogEat} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='title-color font-bold text-2xl'>// <span className='mx-3'>Core Features</span> //</h1>
                        <h1 className='my-3 text-4xl lg:text-6xl font-bold' style={{color: '#393d72'}}>More Than Just A Pet Store & Care <span className='round-box'></span></h1>
                        <div className='mt-6'>
                                <div className='flex gap-6'>
                                    <div className='bg-white rounded-xl hidden lg:block'>
                                        <img src={featureOne} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold' style={{color: '#393d72'}}>Life-time Medicine & Vaccine</h2>
                                        <p className='mt-2 lg:w-3/4'>Pet Care gives lifetime Medicine and vaccines free for those who are taking CarePress services.</p>
                                    </div>
                                </div>
                                <div className='flex gap-6 mt-4'>
                                    <div className='bg-white rounded-xl hidden lg:block'>
                                        <img src={featureTwo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold' style={{color: '#393d72'}}>Core Level Groom Service</h2>
                                        <p className='mt-2 lg:w-3/4'>Pet Care grooming is now giving the core level service that are identical around the globe.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;