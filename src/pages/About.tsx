import { useEffect } from 'react';
import {
  achievements,
  certifications,
  interests,
  languages,
  site,
  softSkills,
} from '../data/site';
import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';

export default function About() {
  useEffect(() => {
    document.title = 'About — Aakash Portfolio';
  }, []);

  return (
    <div className="space-y-10 max-w-3xl">
      <header className="animate-fade-in-up">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white">About</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Hey, I’m Aakash 👋 When I’m not coding, I’m probably on my PS5 grinding
  story games or playing late-night multiplayer with friends 🎮
  <br />
  <br />
  I love travelling and exploring new places — I’ve already been to most parts
  of South India, and next on my list is exploring the north-west side of the
  country.
  <br />
  <br />
  I’m also into random YouTube rabbit holes, good music, aesthetic setups,
  movies, and trying out apps or gadgets that look interesting for absolutely no
  reason 😄
  <br />
  <br />
  Most weekends are a mix of gaming, travel planning, relaxing, and getting
  excited about random new ideas at midnight.
  <br />
  <br />
  The{' '}
  <a
    href="/"
    className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
  >
    home page
  </a>{' '}
  has all the serious stuff — experience, tech stack, education, and
  contributions. This page is more about me outside of work.
</p>
      </header>

      <Section title="Soft skills">
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section title="Key achievements">
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {achievements.map((a) => (
            <li key={a} className="card px-4 py-3">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span key={lang} className="tag">
              {lang}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Interests">
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Connect">
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          <a href={site.links.email} className="text-cyan-600 dark:text-cyan-400 hover:underline">
            {site.email}
          </a>
          {' · '}
          <a href={site.links.phone} className="text-cyan-600 dark:text-cyan-400 hover:underline">
            {site.phone}
          </a>
        </p>
        <SocialLinks />
        <p className="mt-6 text-sm text-slate-500">{site.availability}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={site.links.github} variant="primary">
            GitHub
          </Button>
        </div>
      </Section>
    </div>
  );
}
