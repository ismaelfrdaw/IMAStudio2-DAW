import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn, StaggerContainer, FadeInItem } from '../ui/Motion';
import { PackQuiz } from './PackQuiz';

export const Pricing = () => {
    const { t } = useLanguage();
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <Section className="bg-gray-50 dark:bg-black/20">
            <FadeIn>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-4 inline-block">
                        Pricing
                    </span>
                    <Heading level={2}>{t.packs.title}</Heading>
                    <Text className="mt-4">{t.packs.subtitle}</Text>

                    <div className="flex justify-center">
                        <Button
                            onClick={() => setShowQuiz(true)}
                            className="mt-8 bg-black dark:bg-white dark:text-black text-white hover:scale-105 transition-transform"
                        >
                            <span className="material-symbols-outlined mr-2">psychology</span>
                            {t.packs.quizBtn}
                        </Button>
                    </div>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.packs.items.map((pack, idx) => (
                    <FadeInItem key={pack.id} className="h-full">
                        <Card className={`h-full flex flex-col p-8 relative overflow-hidden group ${idx === 1 ? 'border-primary ring-1 ring-primary' : ''}`}>
                            {idx === 1 && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                                    {t.packs.popular}
                                </div>
                            )}

                            <div className="mb-8">
                                <Heading level={3} className="text-xl mb-2">{pack.name}</Heading>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">{pack.price}€</span>
                                    <span className="text-secondary text-sm">{t.packs.priceSuffix}</span>
                                </div>
                            </div>

                            <Text variant="small" className="mb-8 flex-grow">
                                {pack.desc}
                            </Text>

                            <ul className="flex flex-col gap-4 mb-8">
                                {pack.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex gap-3 text-sm items-start">
                                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                        <span className="text-secondary dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={idx === 1 ? 'primary' : 'outline'} className="w-full">
                                {t.packs.btnPrefix} {pack.name.split(' ')[1]}
                            </Button>
                        </Card>
                    </FadeInItem>
                ))}
            </StaggerContainer>

            {showQuiz && <PackQuiz onClose={() => setShowQuiz(false)} />}
        </Section>
    );
};
