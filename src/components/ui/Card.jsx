import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, hover = true }) => {
    return (
        <div className={cn(
            "flex flex-col gap-5 p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors",
            hover && "hover:border-primary/30",
            className
        )}>
            {children}
        </div>
    );
};
