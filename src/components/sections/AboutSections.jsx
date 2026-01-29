import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from '../ui/Motion';

export const History = () => {
    const { t } = useLanguage();
    return (
        <Section className="bg-white dark:bg-background-dark overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <SlideInLeft className="relative">
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border border-gray-100 dark:border-gray-800">
                        {/* Decorative wireframe lines from the image */}
                        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/20 -rotate-45 scale-x-150"></div>
                        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/20 rotate-45 scale-x-150"></div>

                        <img
                            src="/media/imagenes/equipo.png"
                            alt="Our history"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-white dark:border-background-dark animate-pulse">
                        <span className="text-4xl font-black italic">+10</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Years of</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Excellence</span>
                    </div>
                </SlideInLeft>

                <SlideInRight className="flex flex-col gap-8">
                    <div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">{t.about_page.history_subtitle}</span>
                        <Heading level={2} className="text-5xl font-black mb-6">
                            {t.about_page.history_title}
                        </Heading>
                    </div>

                    <Text variant="lead" className="opacity-80">
                        {t.about_page.history_p1}
                    </Text>

                    <Text className="opacity-60">
                        {t.about_page.history_p2}
                    </Text>

                    <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div>
                            <span className="text-3xl font-black text-primary">200+</span>
                            <Text variant="small" className="uppercase font-bold tracking-widest opacity-40">Projects Done</Text>
                        </div>
                        <div>
                            <span className="text-3xl font-black text-primary">50+</span>
                            <Text variant="small" className="uppercase font-bold tracking-widest opacity-40">Happy Clients</Text>
                        </div>
                    </div>
                </SlideInRight>
            </div>
        </Section>
    );
};

export const MissionVision = () => {
    const { t } = useLanguage();
    return (
        <Section className="bg-gray-50 dark:bg-white/5">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <Heading level={2} className="mb-4">Nuestra Misión y Visión</Heading>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ScaleIn delay={0.1} className="bg-white dark:bg-gray-900 p-12 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 group hover:border-primary/50 transition-colors">
                    {/* Wireframe design lines */}
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-2"></div>
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-700 opacity-50 mb-10"></div>

                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                    </div>

                    <Heading level={3} className="text-3xl font-black mb-6">{t.about_page.mission_title}</Heading>
                    <Text variant="lead" className="opacity-70 leading-relaxed">
                        {t.about_page.mission_desc}
                    </Text>
                </ScaleIn>

                <ScaleIn delay={0.2} className="bg-white dark:bg-gray-900 p-12 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 group hover:border-primary/50 transition-colors">
                    {/* Wireframe design lines */}
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-2"></div>
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-700 opacity-50 mb-10"></div>

                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                    </div>

                    <Heading level={3} className="text-3xl font-black mb-6">{t.about_page.vision_title}</Heading>
                    <Text variant="lead" className="opacity-70 leading-relaxed">
                        {t.about_page.vision_desc}
                    </Text>
                </ScaleIn>
            </div>
        </Section>
    );
};
