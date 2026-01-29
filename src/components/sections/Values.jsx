import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { FadeInItem, StaggerContainer, SlideInLeft, ScaleIn } from '../ui/Motion';

export const Values = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-gray-50 dark:bg-white/5 py-20">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Slide in from left for the content */}
                    <SlideInLeft className="flex flex-col gap-8">
                        <Heading level={2}>
                            {t.values.title} <span className="text-primary">{t.values.subtitle}</span>
                        </Heading>

                        <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.2}>
                            {t.values.items.map((item, index) => (
                                <FadeInItem key={index} className="flex gap-4 group" direction={index % 2 === 0 ? "right" : "left"}>
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                                        {['psychology', 'speed', 'favorite'][index]}
                                    </span>
                                    <div>
                                        <Heading level={3} className="text-lg">{item.title}</Heading>
                                        <Text variant="small" className="mt-1">{item.desc}</Text>
                                    </div>
                                </FadeInItem>
                            ))}
                        </StaggerContainer>
                    </SlideInLeft>

                    {/* Scale and Blur in for the image card */}
                    <ScaleIn delay={0.3} className="relative rounded-[2.5rem] overflow-hidden min-h-[450px] shadow-2xl group cursor-pointer border border-white/10">
                        <img
                            src="/media/imagenes/oficina.png"
                            alt="IMA Studio Office"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply group-hover:bg-primary/70 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
                            <ul className="flex flex-col gap-5 text-white font-black text-xl sm:text-3xl tracking-tighter">
                                {t.values.overlay.map((text, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[28px] text-white/50">check_circle</span> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScaleIn>
                </div>
            </Section>
        </div>
    );
};
