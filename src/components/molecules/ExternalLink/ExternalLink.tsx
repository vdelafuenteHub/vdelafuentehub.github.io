import { classNames as cn } from '@/ui/utils';

import { type ExternalLinkProps } from './types';

const ExternalLink = ({
  className,
  component: Cmp = 'a',
  target = '_blank',
  rel = 'noopener noreferrer nofollow',
  ...restProps
}: ExternalLinkProps) => (
  <Cmp
    className={cn('ExternalLink-root', className)}
    target={target}
    rel={rel}
    {...restProps}
  />
);

export default ExternalLink;
