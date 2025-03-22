import NextLink from 'next/link';
import { useMemo } from 'react';

import { Link } from '@/ui/components/molecules/Link';
import { useIntl } from '@/ui/plugins/Intl';

import { classNames as cn } from '@/ui/utils';

import { i18n } from '~/i18n.config';

import { InternalLinkProps } from './types';

const InternalLink = ({
  className,
  href,
  replace,
  scroll,
  prefetch,
  legacyBehavior = true,
  passHref = true,
  shallow,
  locale,
  ...restProps
}: InternalLinkProps) => {
  const { activeLocale } = useIntl();

  const isDefaultLocale = useMemo(
    () => activeLocale === i18n.defaultLocale,
    [activeLocale]
  );

  return (
    <NextLink
      className={cn('InternalLink-root', className)}
      href={{
        pathname: !isDefaultLocale
          ? href === '/'
            ? '/[lng]'
            : `/[lng]/${href}`
          : href,
        ...(!isDefaultLocale && {
          query: { lng: activeLocale },
        }),
      }}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      legacyBehavior={legacyBehavior}
      passHref={passHref}
      shallow={shallow}
      locale={locale}
      {...restProps}
    >
      <Link {...restProps} />
    </NextLink>
  );
};

export default InternalLink;
