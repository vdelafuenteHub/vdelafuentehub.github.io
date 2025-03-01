import { useSyncExternalStore } from 'react';
import store, { clear, get, set } from './store';

const useLocalStorage = () => {
  const syncStore = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );

  return { state: syncStore, get, set, clear };
};

export default useLocalStorage;
