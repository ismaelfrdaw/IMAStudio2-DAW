import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.services, path: '/services' },
        { name: t.nav.news, path: '/news' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Left */}
                    <NavLink to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10">
                            <img src="/media/imagenes/logo.png" alt="IMA Studio" className="w-full h-full object-contain transform group-hover:scale-110 transition-transform" />
                        </div>
                        <h2 className="text-xl font-black tracking-tighter text-charcoal dark:text-white uppercase transition-colors group-hover:text-primary">
                            IMA Studio
                        </h2>
                    </NavLink>

                    {/* Center Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => cn(
                                    "text-[11px] font-black uppercase tracking-widest transition-all hover:text-primary",
                                    isActive ? "text-primary scale-110" : "text-secondary dark:text-gray-400"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Search & Tools */}
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="hidden lg:flex items-center relative">
                            <input
                                type="text"
                                placeholder={t.nav.search}
                                className="h-10 w-48 pl-4 pr-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:bg-white dark:focus:bg-gray-900 border-gray-100 dark:border-gray-700 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        alert(`Searching for: ${e.target.value}`);
                                        e.target.value = '';
                                    }
                                }}
                            />
                            <span className="material-symbols-outlined absolute right-3 text-gray-400 text-[18px]">search</span>
                        </div>

                        <div className="flex items-center gap-2 pl-4 border-l border-gray-100 dark:border-gray-800">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-charcoal dark:text-gray-300"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {isDark ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>

                            {/* Sidebar Toggle (The new main way to toggle language/options/navigation) */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-charcoal dark:bg-white text-white dark:text-black hover:scale-110 transition-transform shadow-lg"
                            >
                                <span className="material-symbols-outlined text-[20px]">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </nav>
    );
};
