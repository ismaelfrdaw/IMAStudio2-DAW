import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="relative min-h-screen pt-32 overflow-hidden">
            {/* Video Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 z-10 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/media/videos/video_marketing_extra.mp4" type="video/mp4" />
                </video>
            </motion.div>

            <ContactSection />
        </div>
    );
};

export default Contact;
