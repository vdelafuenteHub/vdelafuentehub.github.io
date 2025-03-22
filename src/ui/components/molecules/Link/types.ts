import { TypographyProps } from '../../atoms/Typography/types';

export enum LinkUnderlines {
  ALWAYS = 'always',
  HOVER = 'hover',
  NONE = 'none',
}

export type LinkProps = {
  underline?: `${LinkUnderlines}`;
} & TypographyProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
