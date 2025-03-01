import Head from 'next/head';

import { useIntl } from '@/ui/plugins/Intl';

import { ExternalLink } from '@/components/molecules/ExternalLink';

import { type LayoutProps } from './types';

const Layout = ({ children }: LayoutProps) => {
  const { t } = useIntl();

  return (
    <>
      <Head>
        <meta name="description" content={t('app.description')} />
      </Head>

      <header>
        <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
      </header>

      <main>{children}</main>

      <footer>
        <ExternalLink
          href="https://github.com/vdelafuenteHub"
          title="github.com/vdelafuenteHub"
        >
          github.com/vdelafuenteHub
        </ExternalLink>
      </footer>
    </>
  );
};

export default Layout;
