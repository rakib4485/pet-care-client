import React from 'react';
import service1 from '../../../../assets/1.png'
import service2 from '../../../../assets/2.png'
import service3 from '../../../../assets/3.png'
import service4 from '../../../../assets/4.png'

const Services = () => {
    const serviceItems = [
        {
            id: 1,
            title: 'Care for Puppy',
            text: 'We strongly advise you to take advantage of our extremely affordable annual',
            img: service1
        },
        {
            id: 2,
            title: 'Pet Grooming',
            text: 'Most breeds are bathed, trimmed, and styled by our grooming specialists',
            img: service2
        },
        {
            id: 3,
            title: 'Dental Care',
            text: 'Dental disease is the most commonly neglected chronic infection in our pets',
            img: service3
        },
        {
            id: 4,
            title: 'Service at Resort',
            text: 'With us pet care professionals are passionate, well-trained, and pleasant animal',
            img: service4
        }
    ]
    return (
        <div className='mx-[10%]'>
            <div className='my-20'>
            <h4 className="text-2xl font-bold text-primary text-center">// <span className='mx-3'>Services</span>  //</h4>
            <h2 className="text-6xl font-bold text-center text-secondary relative">What We Do<span className='text-[#FF4880] text-8xl animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FF4880] opacity-75 bottom-0 ml-3'></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FF4880]"></span></h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
                {
                    serviceItems.map(item => (
                        <div className='p-4 border-2 rounded-md hover:shadow-md cursor-pointer'>
                            <img src={item.img} alt="" />
                            <h4 className="text-2xl font-bold text-secondary hover:text-primary my-2">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;