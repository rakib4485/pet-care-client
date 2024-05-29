import React from 'react';

const DogCards = () => {
    const cardItems = [
        {
            id: 1,
            title: 'Appointment scheduling',
            description: 'Effortlessly book, reschedule, or cancel veterinary appointments. Ensure timely and professional care for your pets with our easy scheduling system.'
        },
        {
            id: 2,
            title: 'Pet Medicine',
            description: 'Access a wide range of essential pet medicines. Shop securely and conveniently to keep your pets healthy and well-cared for.'
        },
        {
            id: 3,
            title: 'Pet Food',
            description: "Find high-quality, nutritious pet food tailored to your pet's needs. Enjoy a seamless shopping experience with our extensive selection."
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-6 mx-[10%]' style={{zIndex: "9999"}}>
            {
                cardItems.map(item => (
                    <div className='bg-white p-8 shadow-md rounded-md'>
                        <h4 className="text-2xl font-bold">{item.title}</h4>
                        <p className="text-md text-justify mt-3">{item.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DogCards;