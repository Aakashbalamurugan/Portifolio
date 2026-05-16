export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  homepage: string | null;
}

export interface GitHubCommitItem {
  sha: string;
  message: string;
  url: string;
  repo: string;
  date: string;
}

interface PushPayload {
  commits?: { sha: string; message: string; url?: string }[];
}

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: PushPayload;
}

interface RepoCommit {
  sha: string;
  commit: {
    message: string;
    author: { date: string };
  };
  html_url: string;
}
