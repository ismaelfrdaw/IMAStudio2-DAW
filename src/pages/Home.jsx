import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Trust } from '../components/sections/Trust';
import { Services } from '../components/sections/Services';
import { Methodology } from '../components/sections/Methodology';
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
            <CallToAction />
        </>
    );
};

export default Home;
