import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
    const [doctorName, setDoctorName] = useState('');
    const [doctorId, setDoctorId] = useState(null);
    const {data: doctors = [], refetch} = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-lake.vercel.app/appointmentOption');
            const data = await res.json()
            return data;
        }
    })
    console.log(doctors)
    const handleDeleteProduct = () => {
        fetch(`https://pet-care-server-lake.vercel.app/doctors/${doctorId}`, {
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
                    <h2 className='text-2xl font-bold'>All Doctors</h2>
                </div>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Join Meet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors &&
                            doctors.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><img src={booking.image} alt='' className='w-16' /></td>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>৳{booking.prices}</td>
                                <td><small className='font-semibold btn btn-error btn-xs text-white' onClick={() => {document.getElementById('delete-modal').showModal();
                                            setDoctorId(booking._id);
                                            setDoctorName(booking.name)
                                    }
                                        
                                    }>Delete Doctor</small></td>
                                
                                <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="delete-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-md text-red-500 mt-5 text-xl text-center font-semibold">Do You Relly Want to Delete {doctorName}!!</h2>
                    
                    <div className='text-right mt-10'>
                    <span className='btn btn-error text-white' onClick={handleDeleteProduct}>Delete</span>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllDoctors;