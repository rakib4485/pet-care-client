import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';

const HomeProducts = () => {
    const {data: products = []} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-lake.vercel.app/products?category=0');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mx-[8%]'>
            <div className='my-20'>
            <h4 className="text-2xl font-bold text-primary text-center">// <span className='mx-3'>Products</span>  //</h4>
            <h2 className="text-6xl font-bold text-center text-secondary relative">New Arrive Products<span className='text-[#FF4880] text-8xl animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FF4880] opacity-75 bottom-0 ml-3'></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FF4880]"></span></h2>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {
                    [...products].reverse().slice(0,8).map(product => <ProductCard 
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default HomeProducts;