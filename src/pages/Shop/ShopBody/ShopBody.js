import React, { useState } from 'react';
import Products from './Products/Products';
import { useQuery } from '@tanstack/react-query';
import logo from '../../../assets/logo1.png'
import { Link } from 'react-router-dom';

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
            <div className='flex justify-between gap-10 flex-col md:flex-row'>
            <div className='md:w-[30%] md:sticky md:top-2'>
                    <div className='md:sticky top-2'>
                    <h1 className='text-3xl font-bold text-secondary'>Product Categories</h1>
                    <ul className='mt-10'>
                        {
                            categories.map(category => <li key={category._id} className='mt-5 cursor-pointer' onClick={() => setCategoryId(category.categoryId)}>
                                <a href='#product'>
                                <span className='flex gap-2 items-center'>
                                    <img src={logo} alt='' className='w-7' />
                                    <span className='font-semibold text-xl'>{category.name}</span>
                                </span>
                                </a>
                            </li>)
                        }
                        <li className='mt-5 cursor-pointer' onClick={() => setCategoryId(0)}>
                            <a href='#product'>
                            <span className='flex gap-2 items-center'>
                                <img src={logo} alt='' className='w-7' />
                                <span className='font-semibold text-xl'><a href='#product'>All Products</a></span>
                            </span>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className='md:w-[70%]' id='product'>
                    <Products categoryId={categoryId}/>
                </div>
                
            </div>
        </div>
    );
};

export default ShopBody;