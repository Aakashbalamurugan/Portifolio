import type { GitHubUser } from '../types/github';
import { site } from '../data/site';
import Button from './Button';

interface Props {
  user: GitHubUser;
  compact?: boolean;
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-slate-100/80 dark:bg-slate-900/80 px-4 py-2 text-center min-w-[4.5rem]">
      <p className="text-lg font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-slate-500">{label}</p>
    </div>
  );
}

export default function GitHubProfileCard({ user, compact = false }: Props) {
  const displayName = user.name || user.login;
  const bio = user.bio || site.summary;
  const memberSince = new Date(user.created_at).getFullYear();

  return (
    <article className={`card ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      <div className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'} gap-6 items-center md:items-start`}>
        <img
          src={user.avatar_url}
          alt={displayName}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ring-2 ring-cyan-500/40 shadow-xl object-cover shrink-0"
        />
        <div className="flex-1 text-center md:text-left min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
            GitHub Profile
          </p>
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{displayName}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">@{user.login}</p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{bio}</p>
          <p className="mt-2 text-xs text-slate-500">
            {user.location || site.location} · Member since {memberSince}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
            <Stat label="Repos" value={user.public_repos} />
            <Stat label="Followers" value={user.followers} />
            <Stat label="Following" value={user.following} />
          </div>
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
            <Button href={user.html_url} variant="primary">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}


