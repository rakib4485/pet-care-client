import React, { useContext } from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Shop from './Shop/Shop';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import { AuthContext } from '../../../contexts/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <Hero/>
            <HomeAbout/>
            <Services/>
            <Shop/>
            <HomeProducts/>
            <Features/>
            <HomeDoctor/>
            <Testimonial/>
        </div>
    );
};

export default Home;