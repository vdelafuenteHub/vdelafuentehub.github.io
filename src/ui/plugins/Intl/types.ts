export type IntlContext = {
  activeLocale: string;
  locale(l: string, dict?: any): void;
  t<X extends Record<string, any> | any[]>(
    key: string | (string | number)[],
    params?: X,
    lang?: string
  ): string;
};
