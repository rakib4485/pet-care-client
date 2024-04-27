import React from 'react';
import Products from './Products/Products';

const ShopBody = () => {
    return (
        <div className='mx-[7%]'>
            <div className='flex justify-between'>
                <div className='w-[70%]'>
                    <Products/>
                </div>
                <div className='w-[30%]'>

                </div>
            </div>
        </div>
    );
};

export default ShopBody;