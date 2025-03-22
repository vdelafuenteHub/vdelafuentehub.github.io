import { Link } from '@/ui/components/molecules/Link';

import { classNames as cn } from '@/ui/utils';

import { ExternalLinkProps } from './types';

const ExternalLink = ({
  className,
  target = '_blank',
  rel = 'noopener noreferrer nofollow',
  ...restProps
}: ExternalLinkProps) => (
  <Link
    className={cn('ExternalLink-root', className)}
    target={target}
    rel={rel}
    {...restProps}
  />
);

export default ExternalLink;
