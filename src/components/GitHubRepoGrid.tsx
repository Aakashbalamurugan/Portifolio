import type { GitHubRepo } from '../types/github';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <article className="card p-5 flex flex-col h-full hover:border-cyan-500/40 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-slate-900 dark:text-white truncate">{repo.name}</h3>
        {repo.language && (
          <span className="shrink-0 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
            {repo.language}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 line-clamp-3 mb-4">
        {repo.description || 'No description provided.'}
      </p>
      <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
        <span>★ {repo.stargazers_count} · ⑂ {repo.forks_count}</span>
        <span>Updated {formatDate(repo.updated_at)}</span>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          Repository →
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}

interface Props {
  repos: GitHubRepo[];
  limit?: number;
}

export default function GitHubRepoGrid({ repos, limit }: Props) {
  const list = limit ? repos.slice(0, limit) : repos;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {list.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}


