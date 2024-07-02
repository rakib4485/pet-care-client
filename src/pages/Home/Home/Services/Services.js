import React from 'react';
import service1 from '../../../../assets/1.png'
import service2 from '../../../../assets/2.png'
import service3 from '../../../../assets/3.png'
import service4 from '../../../../assets/4.png'

const Services = () => {
    const serviceItems = [
        {
            id: 1,
            title: 'Pet Supplies',
            text: 'Shop a wide range of pet supplies, including food, toys, and grooming products, all in one place.',
            img: service1
        },
        {
            id: 2,
            title: 'Online Consultations',
            text: 'Access telemedicine services with licensed veterinarians for convenient and timely medical advice.',
            img: service2
        },
        {
            id: 3,
            title: 'Veterinary Appointments',
            text: "Easily book and manage vet appointments online for your pet's health and wellness.",
            img: service3
        },
        {
            id: 4,
            title: 'Nutrition Advice',
            text: 'Get expert advice on the best nutrition and diet plans to keep your pet healthy.',
            img: service4
        }
    ]
    return (
        <div className='mx-[10%]'>
            <div className='my-20'>
            <h4 className="text-2xl font-bold text-primary text-center">// <span className='mx-3'>Services</span>  //</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary relative">What We Do<span className='text-[#FF4880] text-8xl animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FF4880] opacity-75 bottom-0 ml-3'></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FF4880]"></span></h2>
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