import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';

const HomeProducts = () => {
    const {data: products = [], isLoading} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-gamma.vercel.app/products?category=0');
            const data = await res.json();
            return data;
        }
    })
    console.log(products)
    if(isLoading){
        return <Loader/>
    }
    return (
        <div className='mx-[8%]'>
            <div className='my-20'>
            <h4 className="text-2xl font-bold text-primary text-center">// <span className='mx-3'>Products</span>  //</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary relative">New Arrive Products<span className='text-[#FF4880] text-8xl animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FF4880] opacity-75 bottom-0 ml-3'></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FF4880]"></span></h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    [...products].reverse().slice(0,8).map(product => <ProductCard 
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
            <div className='text-center my-10'><Link to='/shop' className='btn hover:bg-primary hover:text-white'>View More Products</Link></div>
        </div>
    );
};

export default HomeProducts;