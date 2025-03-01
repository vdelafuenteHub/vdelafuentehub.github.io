import Head from 'next/head';

import { useIntl } from '@/ui/plugins/Intl';

const NotFound = () => {
  const { t } = useIntl();

  return (
    <>
      <Head>
        <title>{`${t('404.title')} | ${process.env.NEXT_PUBLIC_TITLE}`}</title>
      </Head>

      <p>{t('404.text')}</p>
    </>
  );
};

export default NotFound;
