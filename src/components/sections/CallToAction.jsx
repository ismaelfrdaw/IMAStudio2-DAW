import React from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/Motion';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const CallToAction = () => {
    const { t } = useLanguage();
    return (
        <div className="py-32 bg-charcoal text-white relative overflow-hidden">
            {/* Video Background */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 z-10 bg-charcoal/80 backdrop-blur-[2px]"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full opacity-40 grayscale"
                >
                    <source src="/media/videos/video_marketing_extra.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <Section className="relative z-10 text-center">
                <FadeIn>
                    <Heading level={2} className="text-white mb-6 text-4xl sm:text-5xl font-black">
                        {t.cta.title}
                    </Heading>
                    <Text variant="lead" className="text-gray-300 mb-12 max-w-2xl mx-auto">
                        {t.cta.desc}
                    </Text>
                    <Link to="/contact">
                        <Button className="bg-primary text-white hover:bg-white hover:text-black border-none px-12 h-16 font-black shadow-2xl shadow-primary/20 rounded-full transition-all hover:scale-105 active:scale-95">
                            {t.cta.btn}
                        </Button>
                    </Link>
                </FadeIn>
            </Section>
        </div>
    );
};
