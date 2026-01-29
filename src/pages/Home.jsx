import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Trust } from '../components/sections/Trust';
import { Services } from '../components/sections/Services';
import { Methodology } from '../components/sections/Methodology';
import { Pricing } from '../components/sections/Pricing';
import { ContactSection } from '../components/sections/ContactSection';
import { Values } from '../components/sections/Values';
import { Portfolio } from '../components/sections/Portfolio';
import { CallToAction } from '../components/sections/CallToAction';

const Home = () => {
    return (
        <>
            <Hero />
            <Trust />
            <Values />
            <Portfolio />
            <Services />
            <Methodology />
            <Pricing />
            <ContactSection showInfo={false} />
            <CallToAction />
        </>
    );
};

export default Home;
