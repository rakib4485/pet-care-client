import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, price, img } = product;
    return (
        <div className='p-4 hover:shadow-xl rounded-md  cursor-pointer'>
            <Link to={`/products/${_id}`}>
                <div>
                    <img src={img} alt="" className='rounded-md w-[250px] h-[300px]' />
                </div>
                <div className='my-5'>
                    <h4 className="text-xl font-bold text-secondary text-center hover:text-primary">{name}</h4>
                    <p className="text-center text-primary font-semibold text-xl"><span className='text-3xl'>৳</span>{price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;