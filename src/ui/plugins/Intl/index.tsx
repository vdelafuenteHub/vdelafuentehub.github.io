import type { GetStaticPaths, GetStaticProps } from 'next';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

import rosetta from 'rosetta';
import { i18n } from '~/i18n.config';
import type { IntlContext } from './types';

const Context = createContext<IntlContext | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'Intl';
}

const { defaultLocale, locales } = i18n;

export const getStaticProps = (async ctx => {
  const lng = ctx.params?.lng || defaultLocale;
  let lngDict = {};

  try {
    lngDict = (await import(`/src/locales/${lng}.json`)).default;
  } catch (e) {
    console.error(e);
  }

  return { props: { lng, lngDict } };
}) satisfies GetStaticProps<{
  lng: string | string[];
  lngDict: Record<string, any>;
}>;

export const getStaticPaths = (async () => ({
  paths: locales.map(lng => ({ params: { lng } })),
  fallback: false,
})) satisfies GetStaticPaths;

export const useIntl = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error('useIntl must be used within an Intl provider');
  }

  return ctx;
};

const translator = rosetta();

// default language
translator.locale(defaultLocale);

const Intl = ({
  children,
  lng,
  lngDict,
}: React.PropsWithChildren<{
  lng: string;
  lngDict: Record<string, any>;
}>) => {
  const activeLocaleRef = useRef(lng || defaultLocale);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const state = {
    activeLocale: activeLocaleRef.current,
    t: (...args) => translator.t(...args),
    locale(l, dict) {
      translator.locale(l);
      activeLocaleRef.current = l;

      if (dict) {
        translator.set(l, dict);
      }

      // force rerender to update view
      setTick(tick => tick + 1);
    },
  } satisfies IntlContext;

  // for initial SSR render
  if (lng && firstRender.current === true) {
    firstRender.current = false;
    state.locale(lng, lngDict);
  }

  useEffect(() => {
    if (lng) {
      state.locale(lng, lngDict);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lngDict, lng]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default Intl;
