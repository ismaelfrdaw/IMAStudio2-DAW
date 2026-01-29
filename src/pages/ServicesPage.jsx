import React from 'react';
import { Services as ServicesSection } from '../components/sections/Services';
import { Pricing } from '../components/sections/Pricing';
import { CallToAction } from '../components/sections/CallToAction';
import { ServicesHero, ServiceFeature } from '../components/sections/ServiceDetails';
import { Methodology } from '../components/sections/Methodology';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <ServicesHero />
            <ServicesSection />
            <Methodology />
            <ServiceFeature />
            <Pricing />
            <CallToAction />
        </div>
    );
};

export default ServicesPage;
