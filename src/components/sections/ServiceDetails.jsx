import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { FadeIn, BlurFade, SlideInRight, ScaleIn } from '../ui/Motion';

export const ServicesHero = () => {
    const { t } = useLanguage();
    return (
        <Section className="pt-32 pb-20 bg-gray-50 dark:bg-white/5">
            <div className="text-center max-w-4xl mx-auto">
                <BlurFade>
                    <Heading level={1} className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        {t.services_page.hero_title}
                    </Heading>
                    <Text variant="lead" className="mb-10 opacity-70">
                        {t.services_page.hero_subtitle}
                    </Text>
                    <Button className="bg-primary text-white px-12 h-16 rounded-full font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                        {t.services_page.hero_btn}
                    </Button>
                </BlurFade>
            </div>
        </Section>
    );
};

export const ServiceFeature = () => {
    const { t } = useLanguage();
    return (
        <Section className="bg-white dark:bg-background-dark py-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="flex flex-col gap-6">
                    <FadeIn>
                        <Heading level={2} className="text-4xl font-black mb-2">
                            {t.services_page.feature_title}
                        </Heading>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm block mb-8">
                            {t.services_page.feature_subtitle}
                        </span>
                    </FadeIn>

                    <SlideInRight delay={0.2} className="flex flex-col gap-6 border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-gray-800/20 rounded-r-3xl">
                        <Text variant="lead" className="font-bold">
                            {t.services_page.feature_p1}
                        </Text>
                    </SlideInRight>

                    <FadeIn delay={0.4}>
                        <Text className="opacity-60 text-lg">
                            {t.services_page.feature_p2}
                        </Text>
                    </FadeIn>
                </div>

                <ScaleIn delay={0.3} className="relative">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 relative group">
                        {/* Decorative wireframe lines */}
                        <div className="absolute top-10 left-10 right-10 h-px bg-primary/30"></div>
                        <div className="absolute bottom-10 left-10 right-10 h-px bg-primary/30"></div>
                        <div className="absolute inset-x-10 top-0 bottom-0 w-px bg-primary/10"></div>

                        <img
                            src="/media/imagenes/servicios.png"
                            alt="Service feature"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </ScaleIn>
            </div>
        </Section>
    );
};
