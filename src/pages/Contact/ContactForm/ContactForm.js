import React from 'react';
import contactImg from '../../../assets/bg-contact02.png';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";



const ContactForm = () => {
    return (
        <div className='mx-[8%] my-9'>
            <div className='text-center mb-9'>
                <h3 className='text-3xl font-bold title-color'>Get in Touch</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-full hidden lg:block' src={contactImg} alt="" />
                    </div>
                    <div className='relative -ml-7'>
                        <div className='about-bg p-5 rounded-lg'>
                            <h1 className='text-2xl font-bold text-white'>Drop us a line! <br /> Make an appointment</h1>
                            <div className='mt-4'>
                                <form>
                                <input type="text" placeholder="Name" className="input w-full" />
                                <input type="text" placeholder="Email Address" className="my-3 input w-full" />
                                <input type="text" placeholder="Subject" className="my-3 input w-full" />
                                <br />
                                <textarea className="textarea w-full" placeholder="Your Message"></textarea>
                                <input type="submit" className='uppercase cursor-pointer border-2 border-black p-3 mt-3 font-semibold text-white' value="Send message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='choose-titles font-bold text-3xl'>Get in Touch</h1>
                    <p className='w-3/4 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate quos beatae ipsam. Totam, voluptatibus!</p>
                    <div>
                        <div className='flex gap-3'>
                            <div className='text-5xl font-bold'>
                            <CiLocationOn style={{color: '#ffae00'}} />

                            </div>
                            <div>
                                <h3 className='text-3xl font-semibold mb-2 choose-titles'>Address</h3>
                                <p className='text-gray-500'>Box 565, Charlestown</p>
                                <p className='text-gray-500'>Nevis, West Indies, Caribbean</p>
                            </div>
                        </div>
                        <div className='flex gap-3 my-3'>
                            <div className='text-5xl font-bold'>
                            <MdOutlinePhone style={{color: '#ffae00'}} />

                            </div>
                            <div>
                                <h3 className='text-3xl font-semibold mb-2 choose-titles'>Telephone</h3>
                                <p className='text-gray-500'>+ 1800 – 333 555</p>
                                <p className='text-gray-500'>+ 4800 – 333 999</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='text-5xl font-bold'>
                            <MdOutlineMailOutline style={{color: '#ffae00'}} />

                            </div>
                            <div>
                                <h3 className='text-3xl font-semibold mb-2 choose-titles'>Email</h3>
                                <p className='text-gray-500'>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;