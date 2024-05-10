import React from 'react';

const DogCards = () => {
    const cardItems = [
        {
            id: 1,
            title: 'Appointment scheduling',
            description: 'We provide a range of training programs, ranging from basic and advanced obedience to training your new puppy.'
        },
        {
            id: 2,
            title: 'Pet Medicine',
            description: 'We provide a range of training programs, ranging from basic and advanced obedience to training your new puppy.'
        },
        {
            id: 3,
            title: 'Pet Food',
            description: 'We provide a range of training programs, ranging from basic and advanced obedience to training your new puppy.'
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