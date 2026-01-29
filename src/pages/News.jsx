import React from 'react';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, StaggerContainer, FadeInItem } from '../components/ui/Motion';
import { motion } from 'framer-motion';

const News = () => {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen pt-32 overflow-hidden">
            {/* Background Video (Subtle) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 z-10 bg-white/95 dark:bg-background-dark/95 backdrop-blur-[2px]"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full grayscale opacity-30 dark:opacity-20"
                >
                    <source src="/media/videos/video_corporativo_small.mp4" type="video/mp4" />
                </video>
            </motion.div>

            <Section className="relative z-10 text-center">
                <FadeIn>
                    <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
                        {t.news.tags.insight}
                    </span>
                    <Heading level={1}>{t.news.title}</Heading>
                    <Text className="mt-4 max-w-2xl mx-auto">{t.news.subtitle}</Text>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
                    {t.news.items.map((item, index) => (
                        <FadeInItem key={index} className="flex flex-col gap-4 p-5 border border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-primary/50 transition-all duration-300 cursor-pointer group bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5">
                            <div className="w-full h-56 rounded-[1.5rem] overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-4 py-1.5 bg-primary text-[10px] font-black text-white uppercase tracking-widest rounded-full shadow-lg">{item.category}</span>
                                </div>
                            </div>
                            <div className="px-1 py-2">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-px bg-primary/30"></div>
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Jan 29, 2026</span>
                                </div>
                                <Heading level={3} className="text-xl mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</Heading>
                                <Text variant="small" className="line-clamp-3 text-secondary/80 dark:text-gray-400">{item.desc}</Text>
                            </div>
                        </FadeInItem>
                    ))}
                </StaggerContainer>
            </Section>
        </div>
    );
};

export default News;
