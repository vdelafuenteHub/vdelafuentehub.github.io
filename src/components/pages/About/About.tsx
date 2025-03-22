import Head from 'next/head';

import DOMPurify from 'isomorphic-dompurify';

import { Typography } from '@/ui/components/atoms/Typography';
import { useIntl } from '@/ui/plugins/Intl';

import { ExternalLink } from '@/components/atoms/ExternalLink';
import { Avatar } from '@/components/molecules/Avatar';

import styles from './About.module.css';

const About = () => {
  const { t } = useIntl();

  return (
    <>
      <Head>
        <title>{t('about.title')}</title>
      </Head>

      <Typography component="h2" variant="h4" gutterBottom>
        {t('about.headline')}
      </Typography>

      <ExternalLink
        href="https://es.linkedin.com/in/vdelafuente"
        title="vdelafuente"
        underline="none"
      >
        <Avatar
          src="/me.jpg"
          alt={`${process.env.NEXT_PUBLIC_TITLE}`}
          width="150"
          height="150"
          align="right"
          style={{
            marginTop: '-1.5rem',
          }}
        />
      </ExternalLink>

      <Typography
        className={styles.section}
        gutterBottom
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t('about.body')),
        }}
      />

      <Typography component="h3" variant="h5" gutterBottom>
        {t('about.subheadline-1')}
      </Typography>

      <Typography
        className={styles.section}
        gutterBottom
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t('about.body-1')),
        }}
      />

      <Typography component="h3" variant="h5" gutterBottom>
        {t('about.subheadline-2')}
      </Typography>

      <Typography
        className={styles.section}
        gutterBottom
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t('about.body-2')),
        }}
      />

      <Typography component="h3" variant="h5" gutterBottom>
        {t('about.subheadline-3')}
      </Typography>

      <Typography
        className={styles.section}
        gutterBottom
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t('about.body-3')),
        }}
      />
    </>
  );
};

export default About;
