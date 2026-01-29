import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Values } from '../components/sections/Values';
import { Methodology } from '../components/sections/Methodology';
import { Trust } from '../components/sections/Trust';

const About = () => {
    return (
        <div className="pt-20">
            <Values />
            <Methodology />
            <Trust />
        </div>
    );
};

export default About;
