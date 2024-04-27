import React from 'react';
import banner from '../../../assets/bg-breadcrumb.jpg'
import { Link } from 'react-router-dom';

const ShopBanner = () => {
    return (
        <div style={{background: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='py-20'>
                <h1 className="text-7xl text-center font-bold text-secondary">Shop</h1>
                <p className="font-semibold text-secondary text-center mt-5"><span className="hover:text-primary cursor-pointer"><Link to='/'>Pet-Care</Link></span> / <span className='text-primary'>Products</span></p>
            </div>
        </div>
    );
};

export default ShopBanner;