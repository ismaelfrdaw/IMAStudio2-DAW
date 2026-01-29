import React from 'react';
import { cn } from '../../lib/utils';

export const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    type = 'button'
}) => {
    const baseStyles = "flex items-center justify-center overflow-hidden rounded-full font-bold leading-normal tracking-wide transition-all active:scale-95 px-8 h-14 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/30",
        secondary: "bg-white dark:bg-gray-800 border-2 border-secondary/20 dark:border-gray-700 text-secondary dark:text-gray-300 hover:border-secondary shadow-sm",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5"
    };

    return (
        <button
            type={type}
            className={cn(baseStyles, variants[variant], className)}
            onClick={onClick}
        >
            <span className="truncate">{children}</span>
        </button>
    );
};
