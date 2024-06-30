import React, { useState } from 'react';
import Products from './Products/Products';
import { useQuery } from '@tanstack/react-query';
import logo from '../../../assets/logo1.png'

const ShopBody = () => {
    const [categoryId, setCategoryId] = useState(0)
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-gamma.vercel.app/categories');
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='mx-[7%]'>
            <div className='flex justify-between gap-10'>
                <div className='w-[70%]'>
                    <Products categoryId={categoryId}/>
                </div>
                <div className='w-[30%] sticky top-2'>
                    <div className='sticky top-2'>
                    <h1 className='text-3xl font-bold text-secondary'>Product Categories</h1>
                    <ul className='mt-10 ml-20'>
                        {
                            categories.map(category => <li key={category._id} className='mt-5 cursor-pointer' onClick={() => setCategoryId(category.categoryId)}>
                                <span className='flex gap-2 items-center'>
                                    <img src={logo} alt='' className='w-7' />
                                    <span className='font-semibold text-xl'>{category.name}</span>
                                </span>
                            </li>)
                        }
                        <li className='mt-5 cursor-pointer' onClick={() => setCategoryId(0)}>
                            <span className='flex gap-2 items-center'>
                                <img src={logo} alt='' className='w-7' />
                                <span className='font-semibold text-xl'>All Products</span>
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBody;