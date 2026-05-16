import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { GITHUB_USERNAME, site } from '../data/site';

function useDarkMode() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return dark;
}

export default function GitHubContributionActivity() {
  const dark = useDarkMode();

  return (
    <div className="card p-4 sm:p-6 overflow-x-auto">
      <div className="flex justify-center min-w-[min(100%,720px)] mx-auto [&_svg]:max-w-full">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme={dark ? 'dark' : 'light'}
          fontSize={12}
          blockSize={11}
          blockMargin={3}
        />
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
        >
          View full contribution graph on GitHub →
        </a>
      </p>
    </div>
  );
}
