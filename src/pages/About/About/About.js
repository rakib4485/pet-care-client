import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import HomeAbout from '../../Home/Home/HomeAbout/HomeAbout';
import ChooseUs from '../ChooseUs/ChooseUs';
import Gallery from '../Gallery/Gallery';
import Awards from '../Awards/Awards';
import Fa from '../Fa/Fa';

const About = () => {
    return (
        <div>
            <AboutBanner/>
            <HomeAbout/>
            <ChooseUs/>
            <Gallery/>
            <Awards/>
            <Fa/>
        </div>
    );
};

export default About;