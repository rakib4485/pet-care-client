import React, { useContext, useEffect, useState } from 'react';
import banner from '../../assets/bg-breadcrumb.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Checkout = () => {
    const navigate = useNavigate()
    const date = format(new Date(), 'PP');
    console.log(date)
    const [payment, setPayment] = useState('cashOnDelevary')
    console.log(payment)
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
    }, [carts]);

    const handleOrder = event =>{
        event.preventDefault();

        const form = event.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const name = fname + ' ' + lname;
        const phone = form.phone.value;
        const city = form.city.value;
        const street = form.street.value;

        const order = {
            name,
            phone,
            city,
            street,
            paymentType: payment,
            products: carts,
            price: subtotal + 100,
            customerEmail: user?.email,
            orderDate: date
        }

        console.log(order)

        fetch('https://pet-care-server-gamma.vercel.app/productOrder', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            
            if (data.url) {
              window.location.replace(data.url)
            }
            if (data.acknowledged){
                navigate('/dashboard/my-order')
            }
          })
    }
    return (
        <div >
            <div style={{ background: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='py-20'>
                    <h1 className="text-7xl text-center font-bold text-secondary">Checkout</h1>

                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-10 mx-[10%]'>
                <div >
                    <h1 className='text-3xl text-secondary font-bold'>Shipping Details</h1>
                    <form className="my-10 bg-slate-200 p-6 rounded-lg" onSubmit={handleOrder}>

                        <div className="form-control w-full">
                            <div className='md:flex gap-6'>
                                <div className=''>
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fname"
                                        placeholder="Name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className=''>
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lname"
                                        placeholder="Name"
                                        className="input input-bordered"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                                className="input input-bordered"
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Town / City</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter Your City"
                                className="input input-bordered"
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Street Address</span>
                            </label>
                            <input
                                type="text"
                                name="street"
                                placeholder="House Number and street name"
                                className="input input-bordered"
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment Method</span>
                            </label>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Online Payment</span>
                                    <input type="radio" onClick={() => setPayment('online')} name="radio-10" className="radio checked:bg-red-500" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Cash On Delevary</span>
                                    <input type="radio" onClick={() => setPayment('cashOnDelevary')} name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Place Order</button>
                        </div>

                    </form>
                </div>
                <div className=''>
                    <h1 className='text-4xl text-secondary font-bold'>Order Details</h1>
                    <table className="table mt-10 bg-slate-200 p-6">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-xl font-bold'>Product </th>
                                    <th className='text-xl'>Subtotal</th>

                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    carts.map(cart => <tr className="hover">
                                    <th className='flex items-center gap-6'><span>{cart.productName}</span><span> X{cart.quantity}</span></th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span> {cart.price * cart.quantity}</th>
                                </tr>)
                                }
                                <tr className="hover">
                                    <th className='text-xl'>Subtotal</th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span> {subtotal}</th>
                                </tr>
                                <tr className="hover">
                                    <th className='text-xl'>Shipping</th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span> 100</th>
                                </tr>
                                <tr className="hover">
                                    <th className='text-xl'>Total</th>
                                    <th className='text-xl'><span className='text-3xl font-semibold'>৳ </span> {subtotal + 100}</th>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;