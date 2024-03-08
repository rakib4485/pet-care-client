import React from 'react';
import map from '../../../assets/map.png'
import client1 from '../../../assets/testimonial-image-1.png'
import client2 from '../../../assets/testimonial-image-2.png'
import test1 from '../../../assets/tes-v1-1.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonialItems = [
        {
            id: 1,
            img: test1,
            name: 'Miranda H. Halim',
            designation: 'Founder, Miranda Family',
            comment: 'One thing is clear though: taking a proactive approach to collecting customer feedback ensures you never stray too far from the needs of your community, even as those needs evolve.'
        },
        {
            id: 2,
            img: test1,
            name: 'Miranda H. Halim',
            designation: 'Founder, Miranda Family',
            comment: 'One thing is clear though: taking a proactive approach to collecting customer feedback ensures you never stray too far from the needs of your community, even as those needs evolve.'
        },
        {
            id: 3,
            img: test1,
            name: 'Miranda H. Halim',
            designation: 'Founder, Miranda Family',
            comment: 'One thing is clear though: taking a proactive approach to collecting customer feedback ensures you never stray too far from the needs of your community, even as those needs evolve.'
        }
    ]
    return (
        <div className='py-20 relative w-full' style={{backgroundImage: `url(${map})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='absolute top-14 left-36'>
                <img src={client1} alt="" className='animate-[wiggle_5s_ease-in-out_infinite]'/>
            </div>
            <div className='absolute top-24 right-36'>
                <img src={client2} alt="" className='animate-[wiggle_5s_ease-in-out_infinite]'/>
            </div>
            <div className="text-center text-6xl font-bold text-[#393D72] mt-10 relative">Clients Feedback<span className='text-[#FF4880] text-8xl animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FF4880] opacity-75 bottom-0 ml-3'></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FF4880]"></span></div>
            <span class=""></span>
  
            <div className="bg-white rounded-2xl mx-[10%] p-10 mt-20 shadow">
            <Swiper 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]} 
                loop={true} 
                className="mySwiper"
            >
                {
                    testimonialItems.map(item => <SwiperSlide key={item.id}><TestimonialCard item={item}/></SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;