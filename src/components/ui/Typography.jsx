import React from 'react';
import { cn } from '../../lib/utils';

export const Heading = ({ children, level = 2, className }) => {
    const Tag = `h${level}`;

    const styles = {
        1: "text-4xl sm:text-6xl font-black leading-tight tracking-[-0.033em] text-charcoal dark:text-white",
        2: "text-3xl font-black leading-tight tracking-tight uppercase text-secondary dark:text-gray-300",
        3: "text-xl font-bold leading-tight text-charcoal dark:text-white",
        4: "font-black text-xs uppercase tracking-[0.15em] text-charcoal dark:text-white"
    };

    return (
        <Tag className={cn(styles[level], className)}>
            {children}
        </Tag>
    );
};

export const Text = ({ children, variant = "body", className }) => {
    const styles = {
        body: "text-base font-normal leading-relaxed text-secondary dark:text-gray-400",
        lead: "text-base sm:text-xl font-medium leading-relaxed text-secondary dark:text-gray-400",
        small: "text-sm font-normal leading-relaxed text-secondary dark:text-gray-400",
        caption: "text-xs font-medium text-secondary dark:text-gray-500",
        label: "text-[10px] font-black uppercase tracking-[0.2em] text-secondary dark:text-gray-500"
    };

    return (
        <p className={cn(styles[variant], className)}>
            {children}
        </p>
    );
};
