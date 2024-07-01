import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    const {data: orders = [], refetch} = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const url = `http://localhost:5000/orders?email=${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(orders)
    const delevaryDates = (date = 'ay 14, 2024') => {
        const orderDate = new Date(date); // Parse the date from the API response
        const deliveryDate = new Date(orderDate.getTime());
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        console.log(deliveryDate)
        const del = format(new Date(deliveryDate), 'PP');
        return del;
    }

    const handleDeleteOrder = (id, productId) =>{
        console.log(id)
        fetch(`http://localhost:5000/orders/${id}?productId=${productId}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Order deleted successfully`)
            }
        })
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
                            <th>Order Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((order, i) => {
                                return (order.products?.map(product => <tr key={product._id}>
                                    <th></th>
                                    <td><img src={product.img} alt='' className='w-12' /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.price * product.quantity}</td>
                                    <td>{product.quantity}</td>
                                    <td>{order.paymentType}</td>
                                    <td>{delevaryDates(order?.orderDate)}</td>
                                    <td>
                                        {
                                            product.status ? <span className='text-success text-xl font-semibold'>{product.status}</span> : <span>Processing</span>
                                        }
                                    </td>
                                    {
                                        !product.status && 
                                        <td><span onClick={() => handleDeleteOrder(order._id, product._id)} className='btn btn-error btn-xs' >cancel</span></td>
                                    }
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