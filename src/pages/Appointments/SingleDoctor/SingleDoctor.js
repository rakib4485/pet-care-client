import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppointmentButton from '../../../components/AppointmentButton/AppointmentButton';
import BookingModal from '../BookingModal/BookingModal';
import headerImg from '../../../assets/header.jpg'
import { Tabs } from 'keep-react';
import { Book, Pen, Phone, SignIn, User } from 'phosphor-react'

const SingleDoctor = () => {
    const doctor = useLoaderData();
    const { name, image, prices, slots } = doctor;
    const [treatment, setTreatment] = useState(null);
    console.log(treatment);
    return (
        <div className=''>
            <div className='' style={{ background: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: 'center' }}>
                <div className=" py-24 px-[10%]">
                    <h2 className='text-4xl'>Doctors</h2>
                    <p className='font-semibold'><Link to='/' className='hover:text-primary font-semibold'>Home</Link> <span className='mx-1'>{`->`}</span><Link to='/appointments' className='hover:text-primary font-semibold'>Appointments</Link> <span className='mx-1 font-semibold'>{`->`}</span>{name}</p>
                </div>
            </div>
            <div className="mx-[10%] my-20">
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

                <div className='mt-10'>
                    <Tabs activeLabel="one">
                        <Tabs.List>
                            <Tabs.Item label="one" className="flex items-center gap-2">
                                <Book size={20} />
                                Description
                            </Tabs.Item>
                            <Tabs.Item className="flex items-center gap-2" label="two">
                                <User size={20} />
                                About
                            </Tabs.Item>
                            <Tabs.Item className="flex items-center gap-2" label="three">
                                <Phone size={20} />
                                Contact
                            </Tabs.Item>
                        </Tabs.List>
                        <Tabs.Content label="one">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
                            with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
                            of souls like mine.
                        </Tabs.Content>
                        <Tabs.Content label="two">
                            I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
                            talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
                            a greater artist than now.
                        </Tabs.Content>
                        <Tabs.Content label="three">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
                            with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
                            of souls like mine.
                        </Tabs.Content>
                    </Tabs>
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