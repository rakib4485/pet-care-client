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
                <p className="text-white text-md my-5 text-justify">At PCMS, we treat your pets as if they were our own. We understand that your pet is a beloved family member who deserves the best care. With our wide range of nutritious food, essential medicines, and quality supplies, you'll ensure your pet receives top-notch treatment. Experience the convenience and reliability of our services, designed to keep your pet happy and healthy!</p>
                <AppointmentButton baseColor={`bg-[#393D72]`} HoverColor={`bg-[#8FC424]`} buttonText={`Shop Now`}/>
            </div>
            <div className='min-h-full' style={{backgroundImage: `url(${videoImg})`, backgroundSize: "cover"}}>
                <img src={videoImg} alt="" className='lg:hidden'/>
            </div>
        </div>
    );
};

export default Shop;