import React from 'react';
import { Button } from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const { t } = useLanguage();
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[max(540px,80vh)] text-center overflow-hidden">
            {/* Background Video with Fade In */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 to-white/95 dark:from-background-dark/90 dark:to-background-dark/95"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/media/videos/video_corporativo.mp4" type="video/mp4" />
                    <source src="/media/videos/video_corporativo_large.mp4" type="video/mp4" />
                </video>
            </motion.div>

            <div className="relative z-20 flex flex-col gap-8 max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-4 items-center"
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 opacity-90">
                        <img src="/media/imagenes/logo.png" alt="IMA Studio Logo" className="w-full h-full object-contain drop-shadow-xl" />
                    </div>
                    <Heading level={1}>
                        {t.hero.titleStart} <span className="text-primary">{t.hero.titleEnd}</span>
                    </Heading>
                    <Text variant="lead" className="max-w-xl mx-auto">
                        {t.hero.subtitle}
                    </Text>
                    {/* CEO Credit in the center */}
                    <Text variant="small" className="text-primary font-black uppercase tracking-widest mt-2 animate-pulse">
                        {t.hero.ceos}
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
                >
                    <Link to="/contact">
                        <Button variant="primary" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                            {t.hero.ctaPrimary}
                        </Button>
                    </Link>
                    <Link to="/services">
                        <Button variant="secondary" className="w-full sm:w-auto">
                            {t.hero.ctaSecondary}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
