import React from 'react';
import videoImg from '../../../../assets/video-gallery-bg.jpg'
import AppointmentButton from '../../../../components/AppointmentButton/AppointmentButton';

const Shop = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center'>
            <div className='bg-[#FF4880] px-[10%] py-20'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>Get Every Pet</h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>Food & Toods </h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>Here. </h1>
                <p className="text-white text-md my-5 text-justify">We're a rare breed here at CarePress. We will adore and care for your dog as if it were our own. We understand that your dog is a furry member of your family who deserves the best treatment possible. You'll be giving your dog the most exciting day ever with our award-winning daycare, boarding, and food services!</p>
                <AppointmentButton baseColor={`bg-[#393D72]`} HoverColor={`bg-[#8FC424]`} buttonText={`Shop Now`}/>
            </div>
            <div className='min-h-full' style={{backgroundImage: `url(${videoImg})`, backgroundSize: "cover"}}>
                <img src={videoImg} alt="" className='lg:hidden'/>
            </div>
        </div>
    );
};

export default Shop;