import Head from 'next/head';

import { Container } from '@/ui/components/atoms/Container';
import { useIntl } from '@/ui/plugins/Intl';

import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

import { MAX_WIDTH } from '@/utils/constants';

import { LayoutProps } from './types';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps) => {
  const { t } = useIntl();

  return (
    <>
      <Head>
        <meta name="description" content={t('app.description')} />
      </Head>

      <Header />

      <Container component="main" className={styles.main} maxWidth={MAX_WIDTH}>
        {children}
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
