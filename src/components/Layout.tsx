import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const navLinkClass =
    'hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-800 dark:text-gray-100';

  const footerLinkClass =
    'inline-flex min-h-11 min-w-[44px] items-center justify-center px-3 py-2 rounded-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors';

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
      <div className="max-w-5xl mx-auto mb-16 sm:mb-24 md:mb-32 px-3 sm:px-4 md:px-6">
        <header className="bg-gray-100 dark:bg-gray-800 py-4 sm:py-6 rounded-b-xl sm:rounded-b-2xl shadow-sm">
          <nav className="flex flex-wrap justify-between items-center gap-2 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold min-w-0 flex-1 pr-2 leading-snug">
              <Link
                to="/"
                className="text-black dark:text-white no-underline [overflow-wrap:anywhere]"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-blue-600 dark:text-blue-400">Aakash</span>
                Balamurugan
              </Link>
            </h1>
            <div className="md:hidden shrink-0">
              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-2 -mr-2 min-h-11 min-w-11 inline-flex items-center justify-center"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium shrink-0">
              <li>
                <Link to="/" className={navLinkClass}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/projects" className={navLinkClass}>
                  PROJECT
                </Link>
              </li>
              <li>
                <Link to="/games" className={navLinkClass}>
                  MINI-GAMES
                </Link>
              </li>
            </ul>
          </nav>
          <ul
            id="mobile-nav"
            className={`md:hidden flex-col w-full border-t border-gray-200 dark:border-gray-700 mt-3 pt-3 gap-1 text-sm font-medium ${
              mobileOpen ? 'flex' : 'hidden'
            }`}
          >
            <li>
              <Link
                to="/"
                className={`${navLinkClass} block py-3 px-2 rounded-lg active:bg-gray-200/80 dark:active:bg-gray-700/80`}
                onClick={() => setMobileOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${navLinkClass} block py-3 px-2 rounded-lg active:bg-gray-200/80 dark:active:bg-gray-700/80`}
                onClick={() => setMobileOpen(false)}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                to="/games"
                className={`${navLinkClass} block py-3 px-2 rounded-lg active:bg-gray-200/80 dark:active:bg-gray-700/80`}
                onClick={() => setMobileOpen(false)}
              >
                MINI-GAMES
              </Link>
            </li>
          </ul>
        </header>

        <div className="pt-2 sm:pt-0">
          <Outlet />
        </div>

        <footer className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8 mt-10 sm:mt-12 pb-4 animate-fadeIn text-sm font-medium">
          <a
            href="https://github.com/Aakashbalamurugan"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-balamurugan/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            LinkedIn
          </a>
          <a href="mailto:aakashbala205@gmail.com" className={footerLinkClass}>
            Email
          </a>
        </footer>
      </div>
    </div>
  );
}
