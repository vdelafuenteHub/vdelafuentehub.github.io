import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google';
import { useReportWebVitals } from 'next/web-vitals';

import Intl from '@/ui/plugins/Intl';
import Loaders from '@/ui/plugins/Loaders';

import { Loader } from '@/components/atoms/Loader';
import { Layout } from '@/components/templates/Layout';

import '@/styles/reset.min.css';

import '@/styles/globals.css';

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  useReportWebVitals(metric => {
    sendGTMEvent({
      event: 'web_vitals',
      webVitalsData: {
        name: metric.name,
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1e3 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      },
    });
  });

  const trackPage = useCallback(
    (url: string) =>
      sendGTMEvent({
        event: 'pageView',
        page: url,
      }),
    []
  );

  useEffect(() => {
    events.on('routeChangeComplete', trackPage);

    return () => {
      events.off('routeChangeComplete', trackPage);
    };
  }, [events, trackPage]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, sans-serif;
        }
      `}</style>

      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.png"
          sizes="60x60"
        />
        <meta name="theme-color" content="#333333" />

        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Intl lng={pageProps.lng} lngDict={pageProps.lngDict}>
        <Loaders fallback={<Loader aria-label="loader" />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Loaders>
      </Intl>
    </>
  );
}
