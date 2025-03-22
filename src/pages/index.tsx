import { getStaticProps as getIntlStaticProps } from '@/ui/plugins/Intl';

import {
  Home,
  getStaticProps as getHomeStaticProps,
} from '@/components/pages/Home';

export default function Page({ ...props }) {
  return (
    <>
      <Home {...props} />
    </>
  );
}

export const getStaticProps = async ({ ...ctx }) => {
  const { props: intlProps } = await getIntlStaticProps(ctx);
  const { props: pageProps } = await getHomeStaticProps();

  return {
    props: {
      ...intlProps,
      ...pageProps,
    },
  };
};
