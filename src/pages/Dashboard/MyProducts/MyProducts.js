import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [productId, setProductId] = useState(null)
    console.log(productId)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-product?email=${user?.email}`);
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteProduct = () => {
        fetch(`http://localhost:5000/product/${productId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Order Confrim successfully`)
                    closeModal('delete-modal')
                }
            })
    }

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);
    
        // Hide the modal
        modal.close();
      };
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
                                <th>Delete</th>
                                {/* <th>Status</th> */}
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
                                    <td><small className='font-semibold btn btn-error btn-xs text-white' onClick={() => {document.getElementById('delete-modal').showModal();
                                            setProductId(booking._id)
                                    }
                                        
                                    }>Delete Product</small></td>

                                    {/* <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td> */}

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="delete-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-md text-red-500 mt-5 text-xl text-center font-semibold">Do You Relly Want to Delete This Product!!</h2>
                    
                    <div className='text-right mt-10'>
                    <span className='btn btn-error text-white' onClick={handleDeleteProduct}>Delete</span>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyProducts;