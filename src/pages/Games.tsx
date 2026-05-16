import { useEffect } from 'react';
import { games } from '../data/site';
import GameCard from '../components/GameCard';

export default function Games() {
  useEffect(() => {
    document.title = 'Games — Aakash Portfolio';
  }, []);

  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="animate-fade-in-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
          Play
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Mini games</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl">
          Side demos — preview in the card and open the full game with Try now.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
    </div>
  );
}
