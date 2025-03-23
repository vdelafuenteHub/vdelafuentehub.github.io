import { useRouter } from 'next/router';
import { Fragment, useMemo } from 'react';

import { classNames as cn } from '@/ui/utils';

import { InternalLink } from '@/components/atoms/InternalLink';

import { LocaleSwitcherProps } from './types';

import styles from './LocaleSwitcher.module.css';

const LocaleSwitcher = ({
  className,
  locale,
  locales = [],
}: LocaleSwitcherProps) => {
  const { pathname } = useRouter();

  const currentPage = useMemo(() => pathname.replace('/[lng]', ''), [pathname]);

  return (
    <div className={cn('LocaleSwitcher-root', styles.root, className)}>
      {locales.map(({ label, title = label, value }, index) => (
        <Fragment key={value}>
          {value === locale ? (
            <b title={title}>{label}</b>
          ) : (
            <InternalLink
              href={currentPage}
              title={title}
              underline="hover"
              lng={value}
            >
              {label}
            </InternalLink>
          )}

          {index < locales.length - 1 && <span className={styles.divider} />}
        </Fragment>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
