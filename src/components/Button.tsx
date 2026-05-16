import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40',
  secondary:
    'border border-slate-300/80 dark:border-slate-600 bg-white/60 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 hover:border-cyan-500/50',
  ghost: 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400',
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsLink = BaseProps & { to: string; href?: never };
type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: never };

export default function Button(props: ButtonAsLink | ButtonAsAnchor) {
  const { children, variant = 'primary', className = '' } = props;
  const base =
    'inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200';

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  const { href, ...rest } = props as ButtonAsAnchor;
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}


