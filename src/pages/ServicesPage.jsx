import React from 'react';
import { Services as ServicesSection } from '../components/sections/Services';
import { Pricing } from '../components/sections/Pricing';
import { CallToAction } from '../components/sections/CallToAction';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <ServicesSection />
            <Pricing />
            <CallToAction />
        </div>
    );
};

export default ServicesPage;
