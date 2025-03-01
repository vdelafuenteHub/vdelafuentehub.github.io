import NextLink from 'next/link';

import { classNames as cn } from '@/ui/utils';

import { type InternalLinkProps } from './types';

const InternalLink = ({
  className,
  passHref = true,
  legacyBehavior = true,
  ...restProps
}: InternalLinkProps) => (
  <NextLink
    className={cn('InternalLink-root', className)}
    passHref={passHref}
    legacyBehavior={legacyBehavior}
    {...restProps}
  />
);

export default InternalLink;
