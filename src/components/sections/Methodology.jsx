import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn, StaggerContainer, FadeInItem } from '../ui/Motion';

export const Methodology = () => {
    const { t } = useLanguage();

    return (
        <Section className="py-20 bg-white dark:bg-background-dark">
            <FadeIn>
                <div className="flex flex-col gap-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <Heading level={2}>{t.methodology.title}</Heading>
                        <Text className="mt-4">
                            {t.methodology.subtitle}
                        </Text>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {t.methodology.steps.map((step, index) => (
                            <FadeInItem key={index} className="flex flex-col gap-4 relative group cursor-default">
                                <div className="text-6xl font-black text-gray-100 dark:text-gray-800 group-hover:text-primary/10 transition-colors select-none duration-500">
                                    {`0${index + 1}`}
                                </div>
                                <div className="relative -mt-8 px-2 group-hover:-translate-y-2 transition-transform duration-300">
                                    <Heading level={3} className="text-lg mb-2 group-hover:text-primary transition-colors">{step.title}</Heading>
                                    <Text variant="small">{step.desc}</Text>
                                </div>
                            </FadeInItem>
                        ))}
                    </StaggerContainer>
                </div>
            </FadeIn>
        </Section>
    );
};
