export type LocaleSwitcherProps = {
  locale?: string;
  locales?: {
    label: string;
    title?: string;
    value: string;
  }[];
} & React.AllHTMLAttributes<HTMLDivElement>;
