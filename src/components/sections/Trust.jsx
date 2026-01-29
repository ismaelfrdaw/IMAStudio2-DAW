import React from 'react';
import { Section } from '../ui/Section';
import { Text } from '../ui/Typography';

export const Trust = () => {
    const icons = ['polymer', 'api', 'deployed_code', 'hub', 'trophy'];

    return (
        <div className="py-12 bg-gray-50 dark:bg-white/5 border-y border-gray-100 dark:border-gray-800">
            <Text variant="label" className="pb-8 text-center">Trusted Partners</Text>
            <div className="flex flex-wrap justify-center items-center gap-10 px-6 opacity-30 grayscale dark:invert selection:bg-transparent">
                {icons.map((icon, i) => (
                    <span key={i} className="material-symbols-outlined text-4xl sm:text-5xl select-none cursor-default hover:text-primary hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        {icon}
                    </span>
                ))}
            </div>
        </div>
    );
};
