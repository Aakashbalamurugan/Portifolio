import type { games } from '../data/site';

type Game = (typeof games)[number];

const previewMeta: Record<string, { emoji: string; gradient: string }> = {
  'Snake Game': { emoji: '🐍', gradient: 'from-emerald-900/80 via-slate-900 to-cyan-950' },
  'Tic Tac Toe': { emoji: '⭕', gradient: 'from-violet-900/80 via-slate-900 to-indigo-950' },
  'Color Picker': { emoji: '🎨', gradient: 'from-rose-900/80 via-slate-900 to-amber-950' },
};

export default function GameCard({ game }: { game: Game }) {
  const meta = previewMeta[game.name] ?? { emoji: '🎮', gradient: 'from-slate-800 to-slate-950' };

  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="p-5 pb-3">
        <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">{game.name}</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{game.description}</p>
      </div>

      {/* Preview panel — no iframe so page scroll is never captured */}
      <div className="px-5 pb-5">
        <div
          className={`relative h-44 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-gradient-to-br ${meta.gradient} overflow-hidden isolate`}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
            <span className="text-5xl drop-shadow-md" aria-hidden>
              {meta.emoji}
            </span>
            <p className="mt-2 text-xs font-medium text-slate-300/90 uppercase tracking-wider">
              Play in browser
            </p>
          </div>
          <a
            href={game.play}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-slate-950/30 hover:bg-slate-950/50 transition-colors"
          >
            <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold shadow-lg ring-2 ring-white/20 hover:scale-[1.03] transition-transform">
              Try now
            </span>
          </a>
        </div>

        <a
          href={game.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          GitHub repo →
        </a>
      </div>
    </article>
  );
}
