import Head from 'next/head';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { SvgIcon } from '@/ui/components/atoms/SvgIcon';
import { Typography } from '@/ui/components/atoms/Typography';
import { useIntl } from '@/ui/plugins/Intl';

import { ExternalLink } from '@/components/atoms/ExternalLink';
import ForkIcon from '@/images/fork.svg';
import { getRepos, Repo } from '@/services';

import styles from './Home.module.css';

const Repository = memo(function Repository({
  locale,
  date,
  label,
  type,
}: any) {
  return (
    <div className={styles.repository}>
      <code className={styles.repositoryDate}>
        {new Date(date).toLocaleDateString(locale, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </code>

      <Typography
        className={styles.repositoryText}
        component="span"
        variant="body2"
        noWrap
      >
        {label}
      </Typography>

      {type === 'fork' && (
        <span className={styles.repositoryFork}>
          <SvgIcon component={ForkIcon} fontSize="0.9rem" />
          <span className="sr-only">{type}</span>
        </span>
      )}
    </div>
  );
});

const RepositoryTable = memo(function RepositoryTable({ locale, items }: any) {
  const { t } = useIntl();

  return (
    <div className={styles.repositoryTable}>
      <Typography className={styles.repositoryTableHeader} variant="body2">
        <b className={styles.repositoryDate}>{t('common.updated')}</b>
        <b className={styles.repositoryText}>{t('common.project')}</b>
        <b className={styles.repositoryFork}>{t('common.fork')}</b>
      </Typography>

      <ul className={styles.repositoryTableBody}>
        {items.map(({ name, url, timestamp, fork }: Repo) => (
          <li key={name}>
            <ExternalLink href={url} title={name} underline="none">
              <Repository
                locale={locale}
                date={timestamp}
                label={name}
                type={fork ? 'fork' : '-'}
              />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
});

const Home = ({ data = [] }) => {
  const { t, activeLocale } = useIntl();

  const firstRender = useRef(true);

  const [list, setList] = useState<any[]>(data);

  const getList = useCallback(async (config?: RequestInit) => {
    const data = await getRepos(config);

    setList(data);
  }, []);

  useEffect(() => {
    if (!data.length && firstRender.current) {
      firstRender.current = false;

      const controller = new AbortController();
      const signal = controller.signal;

      getList({ signal });

      return () => {
        controller.abort();
      };
    }
  }, [data.length, getList]);

  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
      </Head>

      <Typography component="h2" variant="h5" gutterBottom>
        {t('home.headline')}
      </Typography>

      <RepositoryTable locale={activeLocale} items={list} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getRepos({ server: true });

  return {
    props: {
      data,
    },
  };
};
