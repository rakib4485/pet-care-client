import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment }) => {
    const {user} = useContext(AuthContext)
    const { _id,name,  prices, meet, email: doctorEmail } = treatment;
    const [selectedDate, setSelectedDate] = useState(new Date())
    const date = format(selectedDate, 'PP');

    const {data: slots = []} = useQuery({
      queryKey: ['slot', selectedDate],
      queryFn: async() => {
        const res = await fetch(`https://pet-care-server-lake.vercel.app/appointmentSlots/${doctorEmail}?date=${date}`);
        const data = await res.json();
        return data.slots;
      }
    })
    console.log(slots);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        // const type = form.type.value;
        // const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
          appointmentDate: date,
          treatment: name,
          patient: user?.displayName,
          slot,
          email,
          doctorEmail,
          phone,
          prices,
          meet,
        }
    
        fetch('https://pet-care-server-lake.vercel.app/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            
            if (data.url) {
              window.location.replace(data.url)
            }
            else {
              toast.error(data.message)
            }
          })
      }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p>{doctorEmail}</p>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
            <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>

            <select name='slot' className="select select-bordered w-full">

              {
                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
              }
            </select>
            {/* <select name="type" className="select select-bordered w-full">
              <option disabled selected>Select Appointment Type</option>
              <option>Online</option>
              <option>Offline</option>
            </select> */}
            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
            <input name='phone' type="text" defaultValue={user?.phone} placeholder="Phone Number" className="input input-bordered w-full" />
            <p className='text-red-500'> Note: You must have to complete the payment for confirm your appointment</p>
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
        </div>
    );
};

export default BookingModal;