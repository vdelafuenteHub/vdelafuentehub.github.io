import type { Item, LoadersContext } from './types';

type Listener = () => void;

let queue: Item[] = [];
let listeners: Listener[] = [];

export const show = (value => {
  const { id = Date.now(), ...rest } = { ...value };
  queue.push({ id, ...rest });
  emitChange();
}) satisfies LoadersContext['show'];

export const hide = (value => {
  if (value) {
    const index = queue.findIndex(i => i?.id === value);
    queue.splice(index, 1);
  } else {
    queue.shift();
  }
  emitChange();
}) satisfies LoadersContext['hide'];

export const clear = (() => {
  queue = [];
  emitChange();
}) satisfies LoadersContext['clear'];

const store = {
  subscribe(listener: Listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot: () => Boolean(queue.length),
  getServerSnapshot: () => Boolean(queue.length),
};

export default store;

// auxiliary
function emitChange() {
  for (const listener of listeners) listener();
}
