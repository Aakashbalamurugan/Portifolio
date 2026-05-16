import { useEffect } from 'react';
import { featuredProjects } from '../data/site';
import { useScrollToHash } from '../hooks/useScrollToHash';
import Section from '../components/Section';
import Button from '../components/Button';

const base = process.env.PUBLIC_URL || '';

export default function Projects() {
  useScrollToHash();

  useEffect(() => {
    document.title = 'Projects — Aakash Portfolio';
  }, []);

  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="animate-fade-in-up scroll-mt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
          Work
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Featured projects
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl">
          Two full-stack projects from my resume — shipped end-to-end.
        </p>
      </header>

      <div className="space-y-10 pt-2">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="card p-5 sm:p-8 animate-fade-in-up scroll-mt-28 scroll-mb-8"
          >
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.name}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              <span className="font-medium text-slate-700 dark:text-slate-300">Stack:</span>{' '}
              {project.tech.join(' · ')}
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
              {project.highlights.map((h) => (
                <li key={h.slice(0, 40)}>{h}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {project.images.map((img, i) => (
                <img
                  key={img}
                  src={`${base}${img}`}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="rounded-xl border border-slate-200/60 dark:border-slate-700/60 w-full object-contain max-h-72 bg-slate-100 dark:bg-slate-900"
                />
              ))}
            </div>
            <div className="mt-6">
              <Button href={project.github} variant="primary">
                View on GitHub
              </Button>
            </div>
          </article>
        ))}
      </div>

      <Section title="More code" subtitle="Side projects and demos.">
        <Button to="/games" variant="secondary">
          Mini-games & demos →
        </Button>
      </Section>
    </div>
  );
}
