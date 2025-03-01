import type { NextConfig } from 'next';

import { i18n } from '~/i18n.config';

const DEFAULT_LOCALE = i18n?.defaultLocale || '';
const REDIRECTS_BY_DEFAULT_LOCAL = [
  {
    source: `/${DEFAULT_LOCALE}`,
    destination: '/',
    permanent: true,
  },
  {
    source: `/${DEFAULT_LOCALE}/:path*`,
    destination: '/:path*',
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  output: 'export',
  ...(process.env.NODE_ENV === 'production' && {
    distDir: 'docs',
  }),
  env: {},
  async redirects() {
    return [...REDIRECTS_BY_DEFAULT_LOCAL];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /react/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /react/] },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
