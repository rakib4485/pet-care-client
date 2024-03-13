import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../../Home/Testimonial/Testimonial';

const Services = () => {
  return (
    <div>
      <ServiceBanner />
      <ServiceCards />
      <Testimonial/>
    </div>
  );
};

export default Services;