import {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentProps,
} from 'next/document';
import Script from 'next/script';
import { useMemo } from 'react';

import { i18n } from '~/i18n.config';

export default function Document(props: DocumentProps) {
  const lang = useMemo(
    () => String(props.__NEXT_DATA__.query?.lng || i18n.defaultLocale),
    [props.__NEXT_DATA__.query?.lng]
  );

  return (
    <Html className="no-js" lang={lang}>
      <Head>
        <Script
          id="app-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.replace('no-js', 'js');`,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
