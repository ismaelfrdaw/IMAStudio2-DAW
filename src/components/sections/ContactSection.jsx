import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/Motion';

export const ContactSection = ({ showInfo = true }) => {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <Section className="relative z-20">
            <div className={`grid grid-cols-1 ${showInfo ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                {showInfo && (
                    <FadeIn className="flex flex-col gap-8">
                        <div>
                            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-4 inline-block">
                                {t.contact.tags.contact}
                            </span>
                            <Heading level={2}>{t.contact.title}</Heading>
                            <Text variant="lead" className="mt-4">{t.contact.subtitle}</Text>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {[
                                { icon: 'location_on', title: t.contact.visit.title, text: t.contact.visit.text },
                                { icon: 'mail', title: t.contact.email.title, text: 'hello@imastudio.com' },
                                { icon: 'call', title: t.contact.call.title, text: '+1 (555) 123-4567' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-14 h-14 bg-white dark:bg-gray-800 shadow-md group-hover:shadow-primary/20 group-hover:bg-primary group-hover:text-white rounded-2xl flex items-center justify-center text-primary transition-all duration-300">
                                        <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                                    </div>
                                    <div>
                                        <Heading level={4} className="text-sm font-black uppercase tracking-tight">{item.title}</Heading>
                                        <Text variant="small">{item.text}</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}

                <FadeIn delay={0.2} className={`${!showInfo ? 'max-w-3xl mx-auto' : ''} w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-white/20 dark:border-gray-700/30 relative overflow-hidden`}>
                    {status === 'success' ? (
                        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-center p-8 animate-in fade-in duration-500">
                            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">check_circle</span>
                            </div>
                            <Heading level={2} className="text-2xl">{t.contact.form.success}</Heading>
                            <Text className="mt-3 max-w-xs">{t.contact.form.successDesc}</Text>
                            <Button variant="primary" className="mt-8" onClick={() => setStatus('idle')}>{t.contact.form.redo}</Button>
                        </div>
                    ) : null}

                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary dark:text-gray-400 ml-1">{t.contact.form.name}</label>
                                <input required type="text" className="w-full h-14 px-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary dark:text-gray-400 ml-1">{t.contact.form.email}</label>
                                <input required type="email" className="w-full h-14 px-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-black uppercase tracking-widest text-secondary dark:text-gray-400 ml-1">{t.contact.form.message}</label>
                            <textarea required className="w-full h-40 px-6 py-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-300" placeholder={t.contact.form.placeholder}></textarea>
                        </div>
                        <Button
                            variant="primary"
                            className="w-full h-14 font-black tracking-widest shadow-xl shadow-primary/20"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? t.contact.form.sending.toUpperCase() : t.contact.form.btn.toUpperCase()}
                        </Button>
                    </form>
                </FadeIn>
            </div>
        </Section>
    );
};
