import { useRouter } from 'next/router';
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';

import store, { clear, hide, show } from './store';
import type { LoadersContext } from './types';

const Context = createContext<LoadersContext | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'Loaders';
}

export const useLoaders = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error('useLoaders must be used within a Loaders provider');
  }

  return ctx;
};

const Loaders = ({
  children,
  fallback: Cmp = <Fragment />,
}: React.PropsWithChildren<{ fallback?: React.ReactNode }>) => {
  const { events } = useRouter();

  const syncStore = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );

  const state = useMemo(
    () => ({
      state: syncStore,
      show,
      hide,
      clear,
    }),
    [syncStore]
  );

  useEffect(() => {
    events.on('routeChangeStart', show);
    events.on('routeChangeComplete', hide);

    return () => {
      events.off('routeChangeStart', show);
      events.off('routeChangeComplete', hide);
    };
  }, [events]);

  return (
    <Context.Provider value={state}>
      {syncStore && Cmp}
      {children}
    </Context.Provider>
  );
};

export default Loaders;
