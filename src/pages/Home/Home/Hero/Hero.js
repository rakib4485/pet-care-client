import React from 'react';
import herobg1 from '../../../../assets/slide-v1-1.jpg'
import herobg2 from '../../../../assets/slide-v1-2.jpg'
import herobg3 from '../../../../assets/slide-v1-3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay,EffectFade,Navigation } from 'swiper/modules';
import HeroCard from './HeroCard';
import Shop from '../Shop/Shop';
import DogCards from '../DogCards/DogCards';

const Hero = () => {
    const heroItems = [
        {
            id: 1,
            header: 'Enjoy Your Holiday',
            boldText1: 'We Keep Them',
            boldText2: 'Happy Anytime',
            bgImg: herobg1
        },
        {
            id: 2,
            header: 'Enjoy Your Holiday',
            boldText1: 'We Keep Them',
            boldText2: 'Happy Anytime',
            bgImg: herobg2
        },
        {
            id: 3,
            header: 'Enjoy Your Holiday',
            boldText1: 'We Keep Them',
            boldText2: 'Happy Anytime',
            bgImg: herobg3
        },
    ]
    return (
        <div className='relative lg:mb-60 md:mb-[500px] mb-[650px]'>
            <Swiper 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,EffectFade]} 
                loop={true} 
                effect={'fade'} 
                className="mySwiper"
            >
                {
                    heroItems.map(item => <SwiperSlide key={item.id}><HeroCard item={item}/></SwiperSlide>)
                }
            </Swiper>
            <div className='absolute z-50 lg:-bottom-36 md:-bottom-[450px] -bottom-[600px]'>
                <DogCards/>
            </div>
        </div>
    );
};

export default Hero;