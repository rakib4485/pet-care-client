import React, { useContext, useState } from 'react';
import AppointmentButton from '../../../components/AppointmentButton/AppointmentButton';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ProductOrder = ({ product }) => { 
    const {user} = useContext(AuthContext)
    const { _id, name, img, price, sellerEmail } = product;
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()

    const plusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
        
    }

    const uploadCart = event =>{
        const customerEmail = user?.email;
        const cart = {
            productName: name,
            productId: _id,
            price,
            quantity,
            img,
            customerEmail,
            sellerEmail
        }

        fetch('https://pet-care-server-gamma.vercel.app/carts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
          })
          .then(res => res.json())
          .then(data => {
            navigate('/carts')
          })
    }
    return (
        <div className='mx-[10%]'>
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className='p-4 border rounded-lg'>
                    <img src={img} alt="" className='max-w[300px] h-[400px] rounded-lg mx-auto' />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-secondary">{name}</h2>
                    <h2 className="text-2xl font-semibold text-primary my-5"><span className='text-4xl font-bold'>৳</span>{price}</h2>
                    <p className='text-slate-600 text-lg'>Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>

                    <hr className='my-10' />
                    <div className='md:flex gap-6 items-center'>
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
                        <div onClick={uploadCart} className='mt-10 md:mt-0'>

                            <AppointmentButton baseColor={`bg-[#FF4880] text-xl`} HoverColor={`bg-[#8FC424]`} buttonText={`ADD TO CART`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOrder;