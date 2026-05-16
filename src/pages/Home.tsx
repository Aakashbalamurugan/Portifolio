import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { education, experience, featuredProjects, site, skills } from '../data/site';
import GitHubContributionActivity from '../components/GitHubContributionActivity';
import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  const [avatarSrc, setAvatarSrc] = useState(site.avatar);

  useEffect(() => {
    document.title = `${site.initials} — ${site.role}`;
  }, []);

  return (
    <div className="space-y-14 sm:space-y-16">
      {/* Summary */}
      <section className="animate-fade-in-up text-center max-w-3xl mx-auto">
        <img
          src={avatarSrc}
          alt={site.name}
          onError={() => setAvatarSrc(site.githubAvatar)}
          className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover ring-4 ring-cyan-500/30 shadow-2xl"
        />
        <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          {site.initials}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
          {site.name}
        </h1>
        <p className="mt-2 text-lg text-violet-600 dark:text-violet-400 font-medium">{site.role}</p>
        <p className="mt-4 text-sm text-slate-500 flex flex-wrap justify-center gap-x-3 gap-y-1">
          <a href={site.links.email} className="hover:text-cyan-600 dark:hover:text-cyan-400">
            {site.email}
          </a>
          <span aria-hidden>·</span>
          <a href={site.links.phone} className="hover:text-cyan-600 dark:hover:text-cyan-400">
            {site.phone}
          </a>
          <span aria-hidden>·</span>
          <span>{site.location}</span>
        </p>
        <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed text-left sm:text-center">
          {site.summary}
        </p>
        <SocialLinks className="justify-center mt-6" />
      </section>

      <Section title="Tech stack">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="card p-4">
              <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2 text-sm">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="Freshworks · 2.5+ years">
        <div className="space-y-4">
          {experience.map((job) => (
            <article key={job.title + job.period} className="card p-5 border-l-4 border-l-cyan-500/80">
              <h3 className="font-semibold text-slate-900 dark:text-white">{job.title}</h3>
              <p className="text-sm text-slate-500 mt-1">
                {job.company} · {job.period}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
                {job.points.map((point) => (
                  <li key={point.slice(0, 48)}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-3">
          {education.map((item) => (
            <article key={item.title} className="card p-4 border-l-4 border-l-violet-500/70">
              <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-cyan-700 dark:text-cyan-300 mt-0.5">{item.org}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Contribution activity"
        subtitle="GitHub contribution graph — same view as on my profile."
      >
        <GitHubContributionActivity />
      </Section>

      <Section title="Projects" subtitle="Featured builds — details on the projects page.">
        <ul className="space-y-2">
          {featuredProjects.map((p) => (
            <li key={p.name}>
              <Link
                to={`/projects#${p.id}`}
                className="card block px-5 py-4 font-semibold text-slate-900 dark:text-white hover:border-cyan-500/50 transition-colors"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <p className="text-center text-sm text-slate-500">{site.availability}</p>
    </div>
  );
}
