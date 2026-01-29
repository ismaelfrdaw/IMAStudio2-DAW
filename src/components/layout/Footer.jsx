import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '../ui/Typography';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();
    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.services, path: '/services' },
        { name: t.nav.news, path: '/news' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 py-12 px-4 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center shrink-0 w-8 h-8">
                                <img src="/media/imagenes/logo.png" alt="IMA Studio Logo" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-black tracking-tighter text-secondary">IMA <span className="text-charcoal dark:text-white">STUDIO</span></h3>
                        </div>
                        <Text className="max-w-xs text-sm">
                            {t.footer.desc}
                        </Text>
                        <Text variant="caption" className="text-primary font-bold">
                            {t.footer.ceos}
                        </Text>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className="text-sm font-bold text-secondary dark:text-gray-400 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-secondary dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <span className="text-xs font-bold uppercase">{social[0]}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <Text variant="caption" className="text-center">
                        {t.footer.rights}
                    </Text>
                    <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-secondary/60 dark:text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
                        <a href="#" className="hover:text-primary transition-colors">{t.footer.cookies}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
