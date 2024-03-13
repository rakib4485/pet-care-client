import React from 'react';
import service1 from '../../../assets/service-v1-1.jpg'
import service2 from '../../../assets/service-v1-2.jpg'
import service3 from '../../../assets/service-v1-3.jpg'
import service4 from '../../../assets/service-v1-4.jpg'
import ServiceCard from './ServiceCard';
import dog from '../../../assets/home-1-27.png'

const ServiceCards = () => {
    const serviceCards = [
        {
            id: 1,
            title: 'Care For Puppy',
            img: service1,
            intro: 'We strongly advise you to take advantage of our extremely affordable annual'
        },
        {
            id: 2,
            title: 'Pet Grooming',
            img: service2,
            intro: 'We strongly advise you to take advantage of our extremely affordable annual'
        },
        {
            id: 3,
            title: 'Vaterinary Service',
            img: service3,
            intro: 'We strongly advise you to take advantage of our extremely affordable annual'
        },
        {
            id: 4,
            title: 'Care For Puppy',
            img: service4,
            intro: 'We strongly advise you to take advantage of our extremely affordable annual'
        },

    ]
    return (
        <div className='max-w-screen overflow-hidden'>
            <div className='relative'>
                <svg id="e9lt8i6jeie71" viewBox="0 0 1371 915" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <g id="e9lt8i6jeie72">
                        <g id="e9lt8i6jeie73">
                            <path id="e9lt8i6jeie74" d="M952.751317,86.200000C749.315856,310.570000,604.316337,315.940000,320.286508,312C169.810189,309.910000,-38.760399,484.140000,-1.287033,565C97.174766,777.480000,306.117173,798.020000,557.446994,785C782.588668,773.340000,860.329072,774.170000,1025.738462,867C1249.664187,992.670000,1371.430017,829,1371.430017,829L1371.430017,49C1373.560442,49.040000,1104.624471,-81.310000,952.751317,86.200000Z" transform="translate(0,0) translate(0,0)" fill="rgb(245,239,231)" stroke="none" strokeWidth="1" />
                        </g>
                    </g>
                </svg>
                <div className='absolute top-10'>
                <div className='text-center w-[60%] mx-auto'>
                    <h1 className="text-6xl font-bold text-secondary ">This is the only place for all your pet care</h1>
                    <div className="mx-auto w-32 mt-5">
                        <svg x="0" y="0" viewBox="0 0 53 7">
                            <g className="text-primary">
                                <path className="st0" d="M0 2.59h.44c.77 0 2.82-2.67 4.58.96 1.23 2.53 3.66 2.4 5.31 0 1.65-2.4 4.26-2.7 6.53 0 1.67 1.99 3.83 2.86 5.53 0 .45-.75 3-3.96 6.03 0 3.17 4.15 5.83 0 5.83 0s2.68-4.33 5.86 0c3.02 4.11 5.25 0 5.25 0s2.31-4.32 5.12 0C51.2 4.64 53 4.56 53 4.56" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="100"></path>
                            </g>
                        </svg>
                    </div>
                    <p className='text-[#54595f]'>We offer quick & easy services for both dogs and cat of various breeds. No matter their size or age, we can provide positive grooming experience.</p>
                </div>

                <div className='mx-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
                    {
                        serviceCards.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
            <img src={dog} alt="" className='absolute top-5 -right-32 hidden lg:block'/>
            </div>

            
            
        </div>
    );
};

export default ServiceCards;