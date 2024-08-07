import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppointmentButton from '../../../components/AppointmentButton/AppointmentButton';
import BookingModal from '../BookingModal/BookingModal';
import headerImg from '../../../assets/header.jpg'
import { Tabs } from 'keep-react';
import { Book, Pen, Phone, SignIn, User } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query';
import { FaGraduationCap } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const SingleDoctor = () => {
    const doctor = useLoaderData();
    const { _id, name, image, prices, email } = doctor;
    const [treatment, setTreatment] = useState(null);
    // console.log(treatment);

    const { data: user = [] } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-gamma.vercel.app/user/${email}`);
            const data = await res.json()
            return data;
        }
    })
    console.log(user)
    return (
        <div className=''>
            <div className='' style={{ background: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: 'center' }}>
                <div className=" py-24 px-[10%]">
                    <h2 className='text-4xl'>Doctors</h2>
                    <p className='font-semibold'><Link to='/' className='hover:text-primary font-semibold'>Home</Link> <span className='mx-1'>{`->`}</span><Link to='/appointments' className='hover:text-primary font-semibold'>Appointments</Link> <span className='mx-1 font-semibold'>{`->`}</span>{name}</p>
                </div>
            </div>
            <div className="mx-[10%] my-20">
                <div className='flex items-center gap-6 flex-col md:flex-row'>
                    <div className='w-[250px]'>
                        <img src={image} alt='' className='w-full ' />
                    </div>
                    <div className='md:w-[60%]'>
                        <h2 className='text-2xl font-bold'>{name}</h2>
                        <h2 className='text-xl font-semibold'>Price: BDT {prices}</h2>
                        <p>{user?.doctorDetails?.about.slice(0, 200)} ...</p>
                        <div className='mt-10'>
                            <label 
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
                                <Book size={10} />
                                Description
                            </Tabs.Item>
                            <Tabs.Item className="flex items-center gap-2" label="two">
                                <User size={10} />
                                About
                            </Tabs.Item>
                            <Tabs.Item className="flex items-center gap-2" label="three">
                                <Phone size={10} />
                                Contact
                            </Tabs.Item>
                        </Tabs.List>
                        <Tabs.Content label="one">
                            <p className="text-justify"> {user?.doctorDetails?.about}</p>
                        </Tabs.Content>
                        <Tabs.Content label="two">
                            {
                                user?.doctorDetails?.education &&
                                user?.doctorDetails?.education.map((edu, idx) => <div className="flex gap-3 items-center my-5">
                                    <div><FaGraduationCap className="text-4xl" /></div>
                                    <div>
                                        <p>{edu.institution}</p>
                                        <p><span>{edu.degree}</span><span>, {edu.year}</span></p>
                                    </div>
                                </div>

                                )
                            }
                        </Tabs.Content>
                        <Tabs.Content label="three">
                            <div className="flex gap-3 items-center my-5">
                                <div><FaPhoneSquare className="text-4xl" /></div>
                                <div>
                                    <p>{user?.doctorDetails?.phone}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center my-5">
                                <div><MdEmail className="text-4xl" /></div>
                                <div>
                                    <p>{user?.doctorDetails?.sEmail}</p>
                                </div>
                            </div>
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