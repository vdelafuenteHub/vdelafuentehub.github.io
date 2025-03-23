import { set } from '@/ui/hooks/useLocalStorage/store';
import { hide, show } from '@/ui/plugins/Loaders/store';

import { repos } from '@/api';
import { sortBy } from '@/utils/helpers';

export type Repo = {
  name: string;
  url: string;
  timestamp: string;
  fork: boolean;
};

const mapByArgs = ({ ...args }): Repo => ({
  name: args?.name,
  url: args?.html_url,
  timestamp: args?.updated_at,
  fork: args?.fork,
});

export const getRepos = async (
  init?: { server?: boolean } & RequestInit
): Promise<Repo[]> => {
  let data = [];

  if (!init?.server) {
    show();
  }

  try {
    const res = await repos(init);
    data = (await res.json()).map(mapByArgs).sort(sortBy('name'));
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
