import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import MonthlyOrderReport from '../../../components/MonthlyOrderReport/MonthlyOrderReport';

const MyProductOrder = () => {
    const { user } = useContext(AuthContext);
    const [orderTotal, setOrderTotal] = useState(0);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10); // Default 10

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-gamma.vercel.app/my-product-order?email=${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    const { data: products = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-gamma.vercel.app/my-product?email=${user?.email}`);
            const data = await res.json();
            return data;
        },
    });

    useEffect(() => {
        let total = 0;
        orders.forEach(cart => {
            console.log("Inside",cart)
            if (cart?.product?.status !== 'deleted') {
                const quantity = parseInt(cart.product.quantity);
                const price = parseInt(cart.product.price);
                total += price * quantity;
            }
        });
        setOrderTotal(total);
    }, [orders]);

    const handleDeleteOrder = (id, productId) => {
        fetch(`https://pet-care-server-gamma.vercel.app/delete-order/${id}?productId=${productId}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Order deleted successfully`);
                }
            });
    };

    const handleConfirmOrder = (id, productId) => {
        fetch(`https://pet-care-server-gamma.vercel.app/confirm-order/${id}?productId=${productId}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Order confirmed successfully`);
                }
            });
    };

    const handleDeliverOrder = (id, productId) => {
        fetch(`https://pet-care-server-gamma.vercel.app/deliver-order/${id}?productId=${productId}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Order delivered successfully`);
                }
            });
    };

    // Pagination Logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = [...orders].reverse().slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(orders.length / recordsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const handleRecordsPerPageChange = (e) => {
        setRecordsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    console.log(currentRecords)

    return (
        <div>
            {/* Header */}
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>My Customers</h2>
                </div>
            </div>

            {/* Summary */}
            <div className='shadow-xl rounded-xl bg-white my-10 py-10'>
                <div className='flex gap-3 pb-5 items-center rounded-xl'>
                    <div className='w-[4px] h-10 bg-primary -ml-[1px] rounded-full'></div>
                    <div>
                        <h2 className='text-xl font-bold'>Summary</h2>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-6 mx-10'>
                    <div className='flex items-center justify-between gap-3 border px-[10px] py-5 rounded-lg border-b-[#1EAE98] border-b-4'>
                        <div className='bg-gray-200 p-3 rounded-sm'>💰</div>
                        <div className=''>
                            <h4 className='text-lg font-bold text-right'>Total Revenue</h4>
                            <p className='text-lg text-right'>৳{orderTotal}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-3 border px-[10px] py-5 rounded-lg border-b-[#865DFF] border-b-4'>
                        <div className='bg-gray-200 p-3 rounded-sm'>📦</div>
                        <div className=''>
                            <h4 className='text-lg font-bold text-right'>Total Orders</h4>
                            <p className='text-lg text-right'>{orders?.length}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-3 border px-[10px] py-5 rounded-lg border-b-[#D74EFF] border-b-4'>
                        <div className='bg-gray-200 p-3 rounded-sm'>🛒</div>
                        <div className=''>
                            <h4 className='text-lg font-bold text-right'>Total Products</h4>
                            <p className='text-lg text-right'>{products?.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className='shadow-xl rounded-xl bg-white my-10 py-10'>
                <div className='flex justify-between items-center mx-5 mb-3'>
                    <h2 className='text-xl font-bold'>Recent Orders</h2>
                    <div>
                        <label htmlFor="recordsPerPage" className="mr-2 text-gray-700 font-medium">Show:</label>
                        <select
                            id="recordsPerPage"
                            value={recordsPerPage}
                            onChange={handleRecordsPerPageChange}
                            className="border rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:border-primary"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto mx-5">
                    <table className="table text-lg text-center">
                        <thead>
                            <tr>
                                <th>Tracking Id</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Order Date</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((booking, i) => (
                                <tr key={i}>
                                    <td><small className="text-xs">{booking?.orderId}</small></td>
                                    <td>
                                        <div className="flex gap-3 items-center">
                                            {booking.userImage ? (
                                                <div className="h-10 w-10 rounded-full">
                                                    <img src={booking?.userImage} alt="" />
                                                </div>
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-[#f5d6e4] flex justify-center items-center">
                                                    <span className="text-primary font-bold">C</span>
                                                </div>
                                            )}
                                            <div className="text-left">
                                                <p className="font-semibold text-sm">{booking?.name}</p>
                                                <p className="text-xs">{booking?.customerEmail}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm min-w-52">{booking?.product?.productName}</td>
                                    <td className="text-sm min-w-36">{booking?.orderDate}</td>
                                    <td>{booking?.product?.quantity}</td>
                                    <td>৳{booking?.product?.quantity * booking?.product?.price}</td>
                                    <td><small className="font-semibold">{booking?.paymentType}</small></td>
                                    <td>
                                        {booking?.product?.status ? (
                                            <span
                                                className={`capitalize ${booking?.product?.status === 'confirmed' || booking?.product?.status === 'deleted'
                                                        ? 'text-orange-300'
                                                        : 'text-green-600'
                                                    }`}
                                            >
                                                {booking?.product?.status}
                                            </span>
                                        ) : (
                                            <button
                                                className="btn btn-success btn-xs"
                                                onClick={() => handleConfirmOrder(booking?.orderId, booking?.product._id)}
                                            >
                                                Confirm
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        {!booking?.product?.status && (
                                            <button
                                                className="btn btn-error btn-xs"
                                                onClick={() => handleDeleteOrder(booking.orderId, booking.product._id)}
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        {booking?.product?.status === 'confirmed' && (
                                            <button
                                                className="btn btn-primary btn-xs text-white"
                                                onClick={() => handleDeliverOrder(booking?.orderId, booking?.product?._id)}
                                            >
                                                Delivered
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-5 mx-5">
                    <div className="text-sm text-gray-600">
                        Showing {indexOfFirstRecord + 1}–{Math.min(indexOfLastRecord, orders.length)} of {orders.length} orders
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Prev Button */}
                        <button
                            disabled={currentPage === 1 || currentRecords.length < 1}
                            onClick={() => paginate(currentPage - 1)}
                            className={`px-3 py-1 border rounded-md ${currentPage === 1 || currentRecords.length < 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-primary hover:text-white'
                                }`}
                        >
                            Prev
                        </button>

                        {/* Page Numbers */}
                        {renderPageNumbers().map((number, index) =>
                            number === '...' ? (
                                <span key={index} className="px-2">…</span>
                            ) : (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`px-3 py-1 border rounded-md ${currentPage === number
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 hover:bg-primary hover:text-white'
                                        }`}
                                >
                                    {number}
                                </button>
                            )
                        )}

                        {/* Next Button */}
                        <button
                            disabled={currentPage === totalPages || currentRecords.length < 1}
                            onClick={() => paginate(currentPage + 1)}
                            className={`px-3 py-1 border rounded-md ${currentPage === totalPages || currentRecords.length < 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-primary hover:text-white'
                                }
                            ${currentRecords.length < 1 ? 'disabled' : ''}
                            `}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Report */}
            <div className="shadow-xl rounded-xl bg-white my-10 py-10">
                <MonthlyOrderReport orders={orders} />
            </div>
        </div>
    );
};

export default MyProductOrder;
