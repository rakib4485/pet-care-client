import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppointmentButton from '../../../components/AppointmentButton/AppointmentButton';
import BookingModal from '../BookingModal/BookingModal';

const SingleDoctor = () => {
    const doctor = useLoaderData();
    const { name, image, prices, slots } = doctor;
    const [treatment, setTreatment] = useState(null);
    console.log(treatment);
    return (
        <div className='mx-[10%] my-20'>
            <div className='flex items-center gap-6'>
                <div className='w-[250px]'>
                    <img src={image} alt='' className='w-full ' />
                </div>
                <div className='w-[60%]'>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <h2 className='text-xl font-semibold'>Starting Price: {prices}</h2>
                    <p>Amet consectetur adipisicing eliteiuim sete eiu tempor incidit utoreas etnalom dolore maena aliqua udiminimate veniam quis norud exercita.</p>
                    <div className='mt-10'>
                        <label disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className='mt-10'
                            onClick={() => setTreatment(doctor)}
                        ><AppointmentButton baseColor={`bg-[#FF4880]`} HoverColor={`bg-[#8FC424]`} buttonText={`Make Appointment`}></AppointmentButton></label>
                    </div>
                </div>
            </div>

            {
                treatment && <BookingModal
                    // selectedDate = {selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                // refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default SingleDoctor;