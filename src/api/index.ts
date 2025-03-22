import { request } from '@/utils/helpers';

const BASE = process.env.NEXT_PUBLIC_GITHUB_API;

export const repos = (init?: RequestInit) =>
  request(`${BASE}/repos`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${process.env.GITHUB_REPOS_TOKEN}`,
    },
  });
