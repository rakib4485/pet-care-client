import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const url = `https://pet-care-server-gamma.vercel.app/orders?email=${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const deliveryDate = (date = 'May 14, 2024') => {
        const orderDate = new Date(date);
        const delivery = new Date(orderDate.getTime());
        delivery.setDate(delivery.getDate() + 7);
        return format(new Date(delivery), 'PP');
    };

    const handleDeleteOrder = (id, productId) => {
        fetch(`https://pet-care-server-gamma.vercel.app/orders/${id}?productId=${productId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Order deleted successfully`);
                }
            });
    };

    // Flatten all products into a single array for pagination
    const allProducts = orders.flatMap(order =>
        order.products.map(product => ({
            ...product,
            orderId: order._id,
            paymentType: order.paymentType,
            orderDate: order.orderDate
        }))
    );

    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = allProducts.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(allProducts.length / recordsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='bg-gray-100 min-h-screen p-5'>
            {/* Header */}
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary -ml-[1px] rounded-full'></div>
                <h2 className='text-2xl font-bold'>My Orders</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-8 shadow-xl rounded-xl bg-white p-5">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Delivery Date</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((product, i) => (
                            <tr key={product._id}>
                                <td>{indexOfFirstRecord + i + 1}</td>
                                <td>
                                    <img src={product.img} alt={product.productName} className='w-12 mx-auto' />
                                </td>
                                <td>{product.productName}</td>
                                <td>৳{product.price * product.quantity}</td>
                                <td>{product.quantity}</td>
                                <td>{product.paymentType}</td>
                                <td>{deliveryDate(product.orderDate)}</td>
                                <td>
                                    {product.status ? (
                                        <span
                                            className={`text-sm font-semibold capitalize ${
                                                product.status === 'confirmed' ? 'text-green-600' : 'text-red-500'
                                            }`}
                                        >
                                            {product.status}
                                        </span>
                                    ) : (
                                        <span className="text-gray-500">Processing</span>
                                    )}
                                </td>
                                <td>
                                    {!product.status && (
                                        <button
                                            onClick={() => handleDeleteOrder(product.orderId, product._id)}
                                            className="btn btn-xs btn-error"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination and Record Info */}
                <div className="flex justify-between items-center mt-5">
                    <div className="text-sm text-gray-600">
                        Showing {indexOfFirstRecord + 1}–{Math.min(indexOfLastRecord, allProducts.length)} of {allProducts.length} orders
                    </div>
                    <div className="inline-flex rounded-md shadow-sm">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`px-3 py-1 border ${
                                    currentPage === index + 1
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 hover:bg-primary hover:text-white'
                                } rounded-md mx-1`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
