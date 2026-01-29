import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export const PackQuiz = ({ onClose }) => {
    const { t } = useLanguage();
    const [step, setStep] = useState(0); // 0 to 9, then 10 for result
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (idx) => {
        const newAnswers = [...answers, idx];
        setAnswers(newAnswers);
        if (step < 9) {
            setStep(step + 1);
        } else {
            setStep(10); // Show result
        }
    };

    const getRecommendation = () => {
        const totalScore = answers.reduce((acc, val) => acc + val, 0);
        if (totalScore >= 14) return t.packs.items[2]; // Elite
        if (totalScore >= 7) return t.packs.items[1];  // Growth
        return t.packs.items[0]; // Starter
    };

    const reset = () => {
        setStep(0);
        setAnswers([]);
    };

    const currentQuestion = t.quiz.questions[step];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl p-8 sm:p-12 relative overflow-hidden"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors z-20"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <AnimatePresence mode="wait">
                    {step < 10 ? (
                        <motion.div
                            key={`step-${step}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col gap-8"
                        >
                            <div>
                                <div className="flex gap-1.5 mb-8">
                                    {t.quiz.questions.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${i <= step ? 'bg-primary' : 'bg-gray-100 dark:bg-gray-800'}`}
                                        ></div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-primary font-black text-xs uppercase tracking-widest">{t.quiz.qPrefix} {step + 1} {t.quiz.qOf} 10</span>
                                </div>
                                <Heading level={3} className="text-2xl mb-2 leading-tight">{currentQuestion.q}</Heading>
                                <Text variant="small">{t.quiz.subtitle}</Text>
                            </div>

                            <div className="flex flex-col gap-3">
                                {currentQuestion.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        className="w-full p-5 text-left rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                                    >
                                        <span className="font-bold text-sm text-charcoal dark:text-white group-hover:text-primary transition-colors">{opt}</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                                            <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-primary text-4xl animate-bounce">celebration</span>
                            </div>
                            <div>
                                <Text className="uppercase tracking-[0.2em] font-black text-xs text-primary mb-2">
                                    {t.quiz.resultHeading}
                                </Text>
                                <Heading level={2} className="text-4xl">{getRecommendation().name}</Heading>
                                <Text className="mt-4 max-w-sm mx-auto">{getRecommendation().desc}</Text>
                            </div>

                            <div className="w-full p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                <ul className="flex flex-col gap-3 text-left">
                                    {getRecommendation().features.slice(0, 3).map((f, i) => (
                                        <li key={i} className="flex gap-2 text-sm items-center">
                                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                            <span className="text-secondary dark:text-gray-300 font-bold">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
                                <Button className="flex-grow h-14" onClick={onClose}>
                                    {t.quiz.cta}
                                </Button>
                                <Button variant="outline" className="h-14" onClick={reset}>
                                    {t.quiz.reset}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
