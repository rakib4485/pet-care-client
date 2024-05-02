import React, { useState } from 'react';
import AppointmentButton from '../../../components/AppointmentButton/AppointmentButton';

const ProductOrder = ({ product }) => {
    const { name, img, price } = product;
    const [quantity, setQuantity] = useState(0);

    const plusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreseQuantity = () => {
        if(quantity >= 1){
            setQuantity(quantity - 1);
        }
        
    }
    return (
        <div className='mx-[10%]'>
            <div className="grid grid-cols-2 gap-6 items-center">
                <div className='p-4 border rounded-lg'>
                    <img src={img} alt="" className='w-full rounded-lg' />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-secondary">{name}</h2>
                    <h2 className="text-2xl font-semibold text-primary my-5"><span className='text-4xl font-bold'>৳</span>{price}</h2>
                    <p className='text-slate-600 text-lg'>Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>

                    <hr className='my-10' />
                    <div className='flex gap-6 items-center'>
                        <div className='border rounded-3xl w-[150px] h-10'>
                            <div className='flex items-center justify-between'>
                                <div className='h-10 w-10 rounded-full border text-center hover:bg-primary cursor-pointer'>
                                    <button className=' text-3xl ' onClick={decreseQuantity}>-</button>
                                </div>
                                <div>
                                    <span>{quantity}</span>
                                </div>
                                <div className='h-10 w-10 rounded-full border text-center hover:bg-primary cursor-pointer'>
                                    <button className=' text-3xl' onClick={plusQuantity}>+</button>
                                </div>
                            </div>
                        </div>
                        <div>

                            <AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`ADD TO CART`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOrder;