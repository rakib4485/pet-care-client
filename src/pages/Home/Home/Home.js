import React from 'react';
import { Button } from "keep-react";
import Hero from './Hero/Hero';
import DogCards from './DogCards/DogCards';
import About from './About/About';
import Services from './Services/Services';
import Shop from './Shop/Shop';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <DogCards/>
            <About/>
            <Services/>
            <Shop/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;