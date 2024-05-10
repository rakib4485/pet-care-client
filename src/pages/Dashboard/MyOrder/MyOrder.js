import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    const {data: orders = []} = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const url = `http://localhost:5000/orders?email=${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(orders)
    const delevaryDates = (date) => {
        const orderDate = new Date(date); // Parse the date from the API response
        const deliveryDate = new Date(orderDate.getTime());
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        console.log(deliveryDate)
        const del = format(new Date(deliveryDate), 'PP');
        return del;
    }

    return (
        <div className='bg-gray-200 h-full'>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>My orders</h2>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Delevary Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((order, i) => {
                                return (order.products?.map(product => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><img src={product.img} alt='' className='w-12' /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{order.paymentType}</td>
                                    <td>{delevaryDates('May 8, 2024')}</td>
                                </tr>))
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;