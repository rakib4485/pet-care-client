import React from 'react';
import Hero from './Hero/Hero';
import DogCards from './DogCards/DogCards';
import About from './HomeAbout/HomeAbout';
import Services from './Services/Services';
import Shop from './Shop/Shop';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import HomeAbout from './HomeAbout/HomeAbout';

const Home = () => {
    return (
        <div>
            <Hero/>
            {/* <DogCards/> */}
            <HomeAbout/>
            <Services/>
            <Shop/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;