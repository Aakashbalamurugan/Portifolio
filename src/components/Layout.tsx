import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { site } from '../data/site';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/games', label: 'Games' },
  { to: '/about', label: 'About' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300'
      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
  }`;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');

    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };

    mq.addEventListener('change', onChange);

    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);

    document.documentElement.classList.toggle('dark', next === 'dark');

    localStorage.setItem('theme', next);
  };

  return (
    <div className="min-h-[100dvh] text-slate-800 dark:text-slate-100">
      <div className="fixed inset-0 -z-10 bg-mesh pointer-events-none" aria-hidden />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="sticky top-0 z-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-3 pb-1 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
          <nav className="glass relative flex items-center justify-between px-4 py-3 rounded-2xl">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-lg font-bold tracking-tight flex items-center shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <span className="gradient-text">{site.shortName}</span>

              <span className="hidden sm:inline text-slate-700 dark:text-slate-200 ml-1">
                Balamurugan
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={linkClass}
                    end={item.to === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="md:hidden min-h-10 min-w-10 rounded-lg border border-slate-200/80 dark:border-slate-600 flex items-center justify-center"
                aria-expanded={mobileOpen}
                aria-label="Menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>

          {/* Mobile Nav */}
          {mobileOpen && (
            <ul className="md:hidden glass mt-2 rounded-2xl p-2 flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={linkClass}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </header>

        <main className="pt-8 sm:pt-10">
          <Outlet />
        </main>

        <footer className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-700/60 text-center">
          <SocialLinks className="justify-center mb-4" />

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.name}. Built with React &
            Tailwind.
          </p>
        </footer>
      </div>
    </div>
  );
}