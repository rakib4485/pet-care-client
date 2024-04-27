import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const Products = () => {

    const {data: products = []} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    // console.log('hello',products);
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard 
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;