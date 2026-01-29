import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn, StaggerContainer, FadeInItem, ScaleIn } from '../ui/Motion';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
    const { t } = useLanguage();

    const projectImages = [
        "/media/imagenes/servicios.png",
        "/media/imagenes/oficina.png",
        "/media/imagenes/reunion.png",
        "/media/imagenes/equipo.png"
    ];

    return (
        <Section className="bg-gray-50 dark:bg-black/20 overflow-hidden">
            <FadeIn>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Heading level={2} className="mb-4">
                        {t.portfolio.title}
                    </Heading>
                    <Text variant="lead" className="opacity-60">
                        {t.portfolio.subtitle}
                    </Text>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {t.portfolio.items.map((item, index) => (
                    <FadeInItem key={index} direction={index % 2 === 0 ? "right" : "left"}>
                        <div className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 h-[350px]">
                            {/* Line Decorative Element similar to the image wireframe */}
                            <div className="absolute top-8 left-8 right-8 h-px bg-gray-200 dark:bg-gray-700 z-20"></div>
                            <div className="absolute top-10 left-8 right-8 h-px bg-gray-200 dark:bg-gray-700 z-20 opacity-50"></div>

                            {/* Content */}
                            <div className="relative z-30 p-10 flex flex-col justify-end h-full">
                                <Heading level={3} className="mb-2 text-2xl group-hover:text-primary transition-colors">
                                    {item.title}
                                </Heading>
                                <Text className="max-w-xs opacity-70">
                                    {item.desc}
                                </Text>
                            </div>

                            {/* Hover Image Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                <img
                                    src={projectImages[index]}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>

                            {/* Decorative Arrow */}
                            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                                <span className="material-symbols-outlined text-primary">arrow_outward</span>
                            </div>
                        </div>
                    </FadeInItem>
                ))}
            </StaggerContainer>

            <div className="flex justify-center">
                <ScaleIn>
                    <Link to="/contact">
                        <Button className="bg-primary text-white px-10 h-14 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            {t.portfolio.btn}
                        </Button>
                    </Link>
                </ScaleIn>
            </div>
        </Section>
    );
};
