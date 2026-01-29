import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Values } from '../components/sections/Values';
import { Methodology } from '../components/sections/Methodology';
import { Trust } from '../components/sections/Trust';
import { History, MissionVision } from '../components/sections/AboutSections';
import { CallToAction } from '../components/sections/CallToAction';

const About = () => {
    return (
        <div className="pt-20">
            <History />
            <MissionVision />
            <Values />
            <Methodology />
            <Trust />
            <CallToAction />
        </div>
    );
};

export default About;
