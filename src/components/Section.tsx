import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`animate-fade-in-up ${className}`}>
      {(title || subtitle) && (
        <header className="mb-6 sm:mb-8">
          {title && (
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}


