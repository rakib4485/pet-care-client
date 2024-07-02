import React, { useContext, useEffect, useState } from 'react';
import banner from '../../assets/bg-breadcrumb.jpg'
import { Link } from 'react-router-dom';
import EmptyCarts from './EmptyCarts';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import AppointmentButton from '../../components/AppointmentButton/AppointmentButton';


const Carts = () => {
    const { user } = useContext(AuthContext)
    const [subtotal, setSubtotal] = useState(0);
    const { data: carts = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-gamma.vercel.app/carts?email=${user?.email}`);
            const data = await res.json()
            return data;
        }
    });

    useEffect(() => {
        let total = 0;
        carts.forEach(cart => {
            console.log(cart.quantity * cart.price)
            total = total + (cart.quantity * cart.price)
            setSubtotal(total)
        })
    }, [carts])

    console.log(subtotal)
    return (
        <div>
            <div style={{ background: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='py-20'>
                    <h1 className="text-7xl text-center font-bold text-secondary">Carts</h1>
                    {/* <p className="font-semibold text-secondary text-center mt-5"><span className="hover:text-primary cursor-pointer"><Link to='/'>Pet-Care</Link></span> / <span className='hover:text-primary cursor-pointer'><Link to='/shop'>Products</Link></span> / <span className='text-primary'>{name}</span></p> */}
                </div>
            </div>
            {/* <EmptyCarts/> */}
            {
                !carts.length ? <EmptyCarts/> : 
                <div className='mx-[10%] my-20'>
                <div className='flex gap-6 flex-col lg:flex-row'>
                    <div className='lg:w-[65%]'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts.map(cart => <tr className="hover" key={cart._id}>
                                            <th></th>
                                            <td><img src={cart.img} alt='' className='md:w-12' /></td>
                                            <td>{cart.productName}</td>
                                            <td>৳{cart.price}</td>
                                            <td>{cart.quantity}</td>
                                            <td>৳{cart.price * cart.quantity}</td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='bg-slate-200 p-6 rounded-lg'>
                        <h1 className='text-4xl font-bold text-secondary'>Cart totals</h1>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-xl font-bold'>Subtotal: </th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span>{subtotal}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <th className='text-xl font-bold'>Shipping Charge</th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span> 100</th>
                                </tr>
                                <tr className="hover">
                                    <th className='text-xl font-bold'>Total</th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span>{subtotal + 100}</th>
                                </tr>
                            </tbody>
                        </table>

                        <div className='mt-5'>
                            <Link to='/checkout'>
                                <AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`Processed To Checkout`}></AppointmentButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default Carts;