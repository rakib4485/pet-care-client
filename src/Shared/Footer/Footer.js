import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-bg py-5 mt-9'>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-14 p-3'>
                <div>
                    <h1>Company Name</h1>
                    <div className='flex items-center gap-8 mt-5'>
                        <p className='about-bg p-2 rounded-md'><FaFacebook  className='text-white'/></p>
                        <p className='about-bg p-2 rounded-md'><FaInstagram  className='text-white'/></p>
                        <p className='about-bg p-2 rounded-md'><FaTwitter className='text-white'/></p>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold' style={{color: '#393d72'}}>Contact Us</h1>
                    <div className='mt-5'>
                        <p>(+1800) 456-789</p>
                        <p className='my-2'>Contact@example.com</p>
                        <p>Box 565, Charlestown,Nevis, West Indies, Caribbean</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-bold' style={{color: '#393d72'}}>Working Hours</h3>
                    <div className='mt-5'>
                    <p>Monday to Friday</p>
                    <p className='my-2'>Open from 9am – 6pm</p>
                    <p>Holidays/Weekends – Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;