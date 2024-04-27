import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Shop from './Shop/Shop';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HomeAbout/>
            <Services/>
            <Shop/>
            <HomeProducts/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;