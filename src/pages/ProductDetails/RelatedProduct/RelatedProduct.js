import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay,EffectFade,Navigation } from 'swiper/modules';
import ProductCard from '../../../components/ProductCard/ProductCard';

const RelatedProduct = () => {
    const {data: products = []} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mx-[10%]'>
            <h1 className="text-secondary text-3xl font-bold my-10 text-center">Related Products</h1>
            <Swiper 
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,EffectFade]} 
                loop={true} 
                // effect={'fade'} 
                className="mySwiper"
            >
                {
                    products.map(item => <SwiperSlide key={item.id}><ProductCard product={item}/></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default RelatedProduct;