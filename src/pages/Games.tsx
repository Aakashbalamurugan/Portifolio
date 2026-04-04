import { useEffect } from 'react';

export default function Games() {
  useEffect(() => {
    document.title = 'Aakash - Games';
  }, []);

  const linkClass =
    'inline-flex min-h-11 items-center text-blue-600 dark:text-blue-400 underline py-2 px-1 -mx-1 rounded-md active:bg-gray-200/60 dark:active:bg-gray-700/60';

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 w-full min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-balance px-1">
        Mini Games by Aakash
      </h1>

      <div className="space-y-6 sm:space-y-8 animate-fadeIn">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Snake Game
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            Classic snake game where the snake grows by eating food and avoids hitting the walls
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="https://github.com/Aakashbalamurugan/snake_game" target="_blank" rel="noopener noreferrer" className={linkClass}>
              🔗 GitHub Repo
            </a>
            <a
              href="https://aakashbalamurugan.github.io/snake_game/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ▶️ Play Now
            </a>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Tic Tac Toe
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            A fun two-player game where Xs and Os compete to get three in a row. This is a game where
            there is no draw—one player will win for sure.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://github.com/Aakashbalamurugan/tic-tac-toe-game"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              🔗 GitHub Repo
            </a>
            <a
              href="https://aakashbalamurugan.github.io/tic-tac-toe-game/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ▶️ Play Now
            </a>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Color Picker
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            There are six levels; each level gets harder. A random color is generated and you have to
            guess the color name from the given options. The game tests your color recognition skills.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="https://github.com/Aakashbalamurugan/color-picker" target="_blank" rel="noopener noreferrer" className={linkClass}>
              🔗 GitHub Repo
            </a>
            <a
              href="https://aakashbalamurugan.github.io/color-picker/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ▶️ Try It
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
