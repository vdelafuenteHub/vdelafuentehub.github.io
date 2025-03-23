import { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps } from '@/ui/components/molecules/Link';

export type InternalLinkProps = { lng?: string } & LinkProps & NextLinkProps;
