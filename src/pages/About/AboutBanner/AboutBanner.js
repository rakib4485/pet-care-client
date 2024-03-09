import React from 'react';
import bannerImg from '../../../assets/about-banner.png'

const AboutBanner = () => {
    return (
        <div className='about-banner py-24'>
            <div className='backdrop-blur-sm bg-white/30 p-9 w-[200px] mx-auto flex justify-center items-center rounded-md mt-56'>
                <h1 className='text-center text-white font-semibold'>Home / <span className='text-secondary'>About</span> </h1>
            </div>
            <h1 className='text-3xl lg:text-7xl font-bold text-white lg:w-1/2 mx-auto text-center mt-16'>Get World Class Gromming Service</h1>
        </div>
    );
};

export default AboutBanner;