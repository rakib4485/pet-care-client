import React from 'react';
import galleryOne from '../../../assets/showcase-1.jpg';
import galleryTwo from '../../../assets/showcase-4.jpg';
import galleryThree from '../../../assets/showcase-2.jpg';
import galleryFour from '../../../assets/showcase-3.jpg';
import galleryFive from '../../../assets/showcase-5.jpg';

const Gallery = () => {
    return (
        <div className='my-9 bg-gray-100 p-9'>
          <div className='mx[8%]'>
          <h1 className='text-primary text-2xl font-bold text-center'>Photo Gallery</h1>
            <h1 className='choose-titles text-3xl lg:text-5xl font-bold text-center my-8'>Looking & Smelling Great!</h1>
            <div className='md:flex justify-center items-center gap-5'>
                <div>
                    <img src={galleryOne} alt="" className='w-full'/>
                    <img className='mt-5 w-full' src={galleryTwo} alt="" />
                </div>
                <div>
                    <img className='rounded-2xl my-5' src={galleryThree} alt="" />
                </div>
                <div className='mt-5 lg:mt-0 '>
                    <img src={galleryFour} alt="" className='w-full'/>
                    <img className='mt-5 w-full' src={galleryFive} alt="" />
                </div>
            </div>
          </div>
        </div>
    );
};

export default Gallery;