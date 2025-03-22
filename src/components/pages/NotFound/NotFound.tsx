import Head from 'next/head';
import { usePathname } from 'next/navigation';

import { useIntl } from '@/ui/plugins/Intl';

import { Typography } from '@/ui/components/atoms/Typography';

const NotFound = () => {
  const { t } = useIntl();
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>{t('404.title')}</title>
      </Head>

      <Typography
        component="p"
        gutterBottom
        dangerouslySetInnerHTML={{
          __html: t('404.text', { pathname: `<code>${pathname}</code>` }),
        }}
      />
    </>
  );
};

export default NotFound;
