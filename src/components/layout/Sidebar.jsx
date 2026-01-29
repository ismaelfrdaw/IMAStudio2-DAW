import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';
import { Heading, Text } from '../ui/Typography';

export const Sidebar = ({ isOpen, onClose }) => {
    const { t, language, toggleLanguage } = useLanguage();

    const navLinks = [
        { name: t.nav.home, path: '/', icon: 'home' },
        { name: t.nav.about, path: '/about', icon: 'info' },
        { name: t.nav.services, path: '/services', icon: 'auto_awesome' },
        { name: t.nav.news, path: '/news', icon: 'newspaper' },
        { name: t.nav.contact, path: '/contact', icon: 'chat_bubble' },
    ];

    const socials = [
        { name: 'Instagram', icon: 'smartphone', url: '#' },
        { name: 'LinkedIn', icon: 'work', url: '#' },
        { name: 'Twitter', icon: 'share', url: '#' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
                    />

                    {/* Sidebar Container - FORCED FULL HEIGHT */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 z-[70] w-[320px] sm:w-[500px] h-[100dvh] bg-white dark:bg-[#080808] shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col border-l border-white/5"
                    >
                        {/* Header */}
                        <div className="flex-shrink-0 flex items-center justify-between p-8 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 p-2 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-inner">
                                    <img src="/media/imagenes/logo.png" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black tracking-tighter text-charcoal dark:text-white uppercase text-xl leading-none">IMA STUDIO</span>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mt-1">Digital Boutique</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-all hover:rotate-90 group active:scale-90"
                            >
                                <span className="material-symbols-outlined text-[28px] group-hover:text-primary">close</span>
                            </button>
                        </div>

                        {/* Scrollable Navigation Area */}
                        <div className="flex-grow overflow-y-auto custom-scrollbar p-8 flex flex-col gap-4">
                            <div className="mb-4">
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary/40 dark:text-gray-500 flex items-center gap-4">
                                    Navigation
                                    <div className="h-px flex-grow bg-gray-100 dark:bg-gray-800"></div>
                                </span>
                            </div>

                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.08 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={onClose}
                                        className={({ isActive }) => cn(
                                            "flex items-center justify-between p-6 rounded-[2rem] transition-all group relative overflow-hidden mb-1",
                                            isActive
                                                ? "bg-primary text-white shadow-2xl shadow-primary/40 scale-[1.02]"
                                                : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                        )}
                                    >
                                        <div className="flex items-center gap-6 relative z-10">
                                            <span className="material-symbols-outlined text-[24px]">{link.icon}</span>
                                            <span className="font-black text-sm uppercase tracking-[0.15em]">{link.name}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-[20px] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 relative z-10">
                                            arrow_forward
                                        </span>
                                    </NavLink>
                                </motion.div>
                            ))}

                            {/* Socials Divider */}
                            <div className="mt-12 mb-6">
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary/40 dark:text-gray-500 flex items-center gap-4">
                                    Follow Us
                                    <div className="h-px flex-grow bg-gray-100 dark:bg-gray-800"></div>
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {socials.map((social, idx) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + idx * 0.1 }}
                                        className="flex flex-col items-center gap-3 p-5 rounded-[2rem] bg-gray-50 dark:bg-gray-800/30 hover:bg-primary/20 hover:text-primary transition-all group border border-transparent hover:border-primary/20"
                                    >
                                        <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">{social.icon}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Footer - FIXED TO BOTTOM */}
                        <div className="flex-shrink-0 p-8 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-black/40">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex flex-col items-center gap-2 p-6 rounded-[2rem] bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all border border-gray-100 dark:border-gray-800 group active:scale-95"
                                >
                                    <span className="text-[10px] font-black uppercase text-secondary/40 group-hover:text-primary transition-colors">Language</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm text-primary animate-pulse">language</span>
                                        <span className="font-black text-charcoal dark:text-white uppercase tracking-tighter text-base">{language === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</span>
                                    </div>
                                </button>
                                <div className="flex flex-col items-center justify-center gap-1 p-6 rounded-[2rem] bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800">
                                    <span className="text-[10px] font-black uppercase text-secondary/40">Build</span>
                                    <span className="font-black text-primary text-xl">v4.3</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <Text variant="small" className="opacity-30 font-bold mb-1 tracking-widest">DIGITAL BOUTIQUE EXPERIENCE</Text>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                                    <Text variant="small" className="text-primary font-black uppercase tracking-[0.2em]">Ismael & Mario (2º DAW)</Text>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
