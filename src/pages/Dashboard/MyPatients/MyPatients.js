import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'phosphor-react';

const MyPatients = () => {
    const {user} = useContext(AuthContext);
    const {data: bookings=[]} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://pet-care-server-lake.vercel.app/my-appointments?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })
    console.log(bookings)
    return (
        <div className='bg-gray-200 h-full'>
        <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
            <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
            <div>
                <h2 className='text-2xl font-bold'>My Patients</h2>
            </div>
        </div>
        <div className="overflow-x-auto mt-10">
            <table className="table w-full text-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Join Meet</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings &&
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                            <td><a className='btn btn-xs btn-primary' href={`${booking.meet}`}>Join here</a></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPatients;