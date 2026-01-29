import React from 'react';
import { cn } from '../../lib/utils';

export const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={cn("py-12 sm:py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
};
