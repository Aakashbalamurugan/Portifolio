import { useEffect, useState } from 'react';
import type { GitHubRepo, GitHubUser } from '../types/github';

interface GitHubState {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGitHub(username: string): GitHubState {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`),
        ]);

        if (!userRes.ok) throw new Error('Could not load GitHub profile');
        if (!reposRes.ok) throw new Error('Could not load GitHub repositories');

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        if (cancelled) return;

        setUser(userData);
        setRepos(
          reposData
            .filter((r) => !r.fork)
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        );
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load GitHub data');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { user, repos, loading, error };
}

