import { repos } from '@/api';

import { set } from '@/ui/hooks/useLocalStorage/store';
import { hide, show } from '@/ui/plugins/Loaders/store';

import { sortBy } from '@/utils/helpers';

export type Repo = {
  name: string;
  url: string;
  timestamp: string;
  fork: boolean;
};

export const getRepos = async (
  init?: { server?: boolean } & RequestInit
): Promise<Repo[]> => {
  let data = [];

  if (!init?.server) {
    show();
  }

  try {
    const res = await repos(init);
    data = (await res.json())
      .map(({ name, html_url, updated_at, fork }: any) => ({
        name,
        url: html_url,
        timestamp: updated_at,
        fork,
      }))
      .sort(sortBy('name'));
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      set('error', await e.json());
    }
  }

  if (!init?.server) {
    hide();
  }

  return data;
};
