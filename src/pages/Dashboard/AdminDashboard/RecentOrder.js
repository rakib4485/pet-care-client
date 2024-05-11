import React from 'react';

const RecentOrder = ({orders}) => {
    console.log(orders)
    return (
        <div className='shadow-xl rounded-xl bg-white my-10 py-10'>
            <div className='flex gap-3 pb-5 items-center rounded-xl '>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-xl font-bold'>Recent Orders</h2>
                </div>
            </div>

            <div className="overflow-x-auto mt-5 mx-5">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th>Tracking Id</th>
                            <th>Custormer</th>
                            <th>Product</th>
                            <th>Order Date</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            [...orders].reverse().slice(0,10).map((booking, i) => <tr key={booking._id}>
                                <td><small>{booking._id}</small></td>
                                <td>
                                    <div className='flex gap-3 items-center'>
                                        <div>
                                            {
                                                booking.userImage ? 
                                                <div className='h-10 w-10 rounded-full'><img src={booking.userImage} alt=''/></div> :
                                                <div className='h-10 w-10 rounded-full bg-[#f5d6e4] flex justify-center items-center'>
                                                    <span className='text-primary font-bold'>C</span>
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            <p className='font-semibold'><small>{booking.name}</small></p>
                                            <p className='-mt-3'><small>{booking.customerEmail}</small></p>
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.products.length}</td>
                                <td>{booking.orderDate}</td>
                                <td><span className='text-2xl'>৳</span>{booking.price}</td>
                                <td><small className='font-semibold'>{booking.paymentType}</small></td>
                                
                                {/* <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td> */}

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrder;