export type Id = number;

export type Item = {
  id: Id;
  [key: string]: unknown;
};

export type Store = boolean;

export type LoadersContext = {
  state: Store;
  show(value?: Item): void;
  hide(value?: Id): void;
  clear(): void;
};
