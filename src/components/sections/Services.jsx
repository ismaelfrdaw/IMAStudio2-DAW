import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerContainer, FadeInItem, SlideInRight } from '../ui/Motion';
import { Link } from 'react-router-dom';

export const Services = () => {
    const { t } = useLanguage();

    const serviceImages = [
        "/media/imagenes/servicios.png",
        "/media/imagenes/oficina.png",
        "/media/imagenes/reunion.png",
        "/media/imagenes/equipo.png",
        "/media/imagenes/servicios.png",
        "/media/imagenes/oficina.png"
    ];

    const serviceIcons = ['stylus', 'devices', 'group_add', 'movie', 'campaign', 'search'];

    return (
        <Section className="bg-white dark:bg-background-dark overflow-hidden">
            {/* Title enters from the right for variety */}
            <SlideInRight>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Heading level={2}>
                        {t.services.title}
                    </Heading>
                    <Text className="mt-4">
                        {t.services.subtitle}
                    </Text>
                </div>
            </SlideInRight>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                {t.services.items.map((service, index) => (
                    <FadeInItem
                        key={index}
                        className="h-full"
                        direction={index % 2 === 0 ? "scale" : "up"}
                    >
                        <Link to="/contact">
                            <Card className="group h-full flex flex-col cursor-pointer overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                {/* Image Area */}
                                <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                                    <img
                                        src={serviceImages[index]}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                        <span className="material-symbols-outlined text-primary">
                                            {serviceIcons[index]}
                                        </span>
                                    </div>
                                </div>

                                <Heading level={3} className="mb-3 text-lg group-hover:text-primary transition-colors">
                                    {service.title}
                                </Heading>
                                <Text variant="small" className="flex-grow">
                                    {service.desc}
                                </Text>
                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                                    <span>Explore</span>
                                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Card>
                        </Link>
                    </FadeInItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
