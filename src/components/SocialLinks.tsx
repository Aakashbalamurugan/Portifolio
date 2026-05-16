import { site } from '../data/site';

const items = [
  { label: 'GitHub', href: site.links.github },
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'Email', href: site.links.email },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex min-h-11 items-center px-4 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
