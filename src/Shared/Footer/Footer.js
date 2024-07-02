import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png'


const Footer = () => {
    return (
        <div className='footer-bg py-5 mt-9'>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-14 p-3'>
                <div>
                <div className="flex items-center">
            <Link to="" className="text-white font-bold text-xl flex items-center gap-2">
              <img src={logo} alt=''className='w-8'/><span className='text-secondary'>Pet Care</span>
            </Link>
          </div>
                    <div className='flex items-center gap-8 mt-5'>
                        <Link className='about-bg p-2 rounded-md'><FaFacebook  className='text-white'/></Link>
                        <Link className='about-bg p-2 rounded-md'><FaInstagram  className='text-white'/></Link>
                        <Link className='about-bg p-2 rounded-md'><FaTwitter className='text-white'/></Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold' style={{color: '#393d72'}}>Contact Us</h1>
                    <div className='mt-5'>
                        <p>(+880) 1906283194</p>
                        <p className='my-2'>Contact@example.com</p>
                        <p>34, Bardhanbari, 2/9 Mirpur 1, Dhaka 1216</p>
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