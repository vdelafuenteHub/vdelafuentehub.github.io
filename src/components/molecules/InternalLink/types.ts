import { type LinkProps } from 'next/link';

export type InternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;
