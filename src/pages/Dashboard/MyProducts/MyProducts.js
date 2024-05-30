import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [] } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-lake.vercel.app/my-product?email=${user?.email}`);
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>Dashboard</h2>
                </div>
            </div>

            <div className='shadow-xl rounded-xl bg-white my-10 py-10'>

                <div className="overflow-x-auto mt-5 mx-5">
                    <table className="table w-full text-lg">
                        <thead>
                            <tr>
                                <th>Tracking Id</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                {/* <th>Payment</th>
                            <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {products &&
                                [...products].reverse().slice(0, 10).map((booking, i) => <tr key={booking._id}>
                                    <td><small>{booking._id}</small></td>
                                    <td>
                                        <img src={booking.img} alt='' className='w-16' />
                                    </td>
                                    <td>{booking.name}</td>
                                    <td>{booking.quantity}</td>
                                    <td><span className='text-2xl'>৳</span>{booking.price}</td>
                                    {/* <td><small className='font-semibold'>{booking.paymentType}</small></td> */}

                                    {/* <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td> */}

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;