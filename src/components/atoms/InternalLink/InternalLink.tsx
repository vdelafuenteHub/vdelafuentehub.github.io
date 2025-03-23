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
  lng,
  locale = lng,
  ...restProps
}: InternalLinkProps) => {
  const { activeLocale } = useIntl();

  const { pathname, searchParams, hash } = useMemo(
    () =>
      typeof href === 'string'
        ? new URL(href, process.env.NEXT_PUBLIC_SITE_URL)
        : href,
    [href]
  );

  const bool = useMemo(() => {
    const defaultCase = [lng, activeLocale].includes(i18n?.defaultLocale);
    const lngCase = !lng || [i18n?.defaultLocale, activeLocale].includes(lng);

    return defaultCase && lngCase;
  }, [activeLocale, lng]);

  return (
    <NextLink
      className={cn('InternalLink-root', className)}
      href={{
        pathname: bool
          ? pathname
          : pathname === '/'
          ? '/[lng]'
          : `/[lng]${pathname}`,
        query: {
          ...Object.fromEntries(searchParams?.entries()),
          ...(!bool && {
            lng: lng || activeLocale,
          }),
        },
        hash,
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
