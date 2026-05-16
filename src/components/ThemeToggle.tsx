interface Props {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 dark:border-slate-600 bg-white/90 dark:bg-slate-800/95 text-lg shadow-lg shadow-slate-900/10 backdrop-blur-sm hover:scale-105 hover:border-cyan-500/50 transition-all"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
