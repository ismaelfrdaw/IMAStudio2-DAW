import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export const Sidebar = ({ isOpen, onClose }) => {
    const { t, language, toggleLanguage } = useLanguage();

    const navLinks = [
        { name: t.nav.home, path: '/', icon: 'home' },
        { name: t.nav.about, path: '/about', icon: 'info' },
        { name: t.nav.services, path: '/services', icon: 'auto_awesome' },
        { name: t.nav.news, path: '/news', icon: 'newspaper' },
        { name: t.nav.contact, path: '/contact', icon: 'chat_bubble' },
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
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                    />

                    {/* Sidebar Container */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 z-[70] w-[320px] sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8">
                                    <img src="/media/imagenes/logo.png" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-black tracking-tighter text-charcoal dark:text-white uppercase">IMA STUDIO</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                            >
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        {/* Navigation */}
                        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-2">
                            <div className="mb-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 dark:text-gray-500">Navigation</span>
                            </div>
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={onClose}
                                        className={({ isActive }) => cn(
                                            "flex items-center gap-4 p-4 rounded-2xl transition-all group",
                                            isActive
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : "hover:bg-gray-50 dark:hover:bg-gray-800 text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                                        )}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                                        <span className="font-black text-sm uppercase tracking-widest">{link.name}</span>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer / Tools */}
                        <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20">
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                                >
                                    <span className="text-[10px] font-black uppercase text-secondary/50">Language</span>
                                    <span className="font-black text-primary">{language === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</span>
                                </button>
                                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                                    <span className="text-[10px] font-black uppercase text-secondary/50">Version</span>
                                    <span className="font-black text-charcoal dark:text-gray-400">P4.3 - DAW</span>
                                </div>
                            </div>

                            <div className="mt-8 text-center pt-8 border-t border-gray-100 dark:border-gray-800">
                                <span className="text-[10px] font-bold text-secondary/40">© 2026 IMA STUDIO · CEOs: Ismael & Mario</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
