import Head from 'next/head';

import { useIntl } from '@/ui/plugins/Intl';

const Home = () => {
  const { t } = useIntl();

  return (
    <>
      <Head>
        <title>{`${t('home.title')} | ${process.env.NEXT_PUBLIC_TITLE}`}</title>
      </Head>

      <p>{t('home.text')}</p>
    </>
  );
};

export default Home;
