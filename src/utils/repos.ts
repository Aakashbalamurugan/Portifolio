import { highlightedRepoNames } from '../data/site';
import type { GitHubRepo } from '../types/github';

export function filterHighlightedRepos(repos: GitHubRepo[]): GitHubRepo[] {
  const order = new Map(highlightedRepoNames.map((name, i) => [name, i]));
  return repos
    .filter((r) => order.has(r.name))
    .sort((a, b) => (order.get(a.name) ?? 0) - (order.get(b.name) ?? 0));
}
