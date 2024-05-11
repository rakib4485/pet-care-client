import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
    const {data: doctors = []} = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json()
            return data;
        }
    })
    console.log(doctors)
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
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>৳{booking.price}</td>
                                <td></td>
                                
                                <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDoctors;