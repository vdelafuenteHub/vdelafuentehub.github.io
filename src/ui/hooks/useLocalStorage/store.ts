type Listener = () => void;

let listeners: Listener[] = [];
let stash: Record<string, unknown> = {};

export const get = (key: string) => Object.freeze(stash[key]);

export const set = (key: string, value: unknown) => {
  stash = { ...stash, [key]: value };
  emitChange();
};

export const clear = () => {
  stash = {};
  emitChange();
};

const store = {
  subscribe(listener: Listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot: () => stash,
  getServerSnapshot: () => stash,
};

export default store;

// auxiliary
function emitChange() {
  for (const listener of listeners) listener();
}
