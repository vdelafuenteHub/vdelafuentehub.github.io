import { forwardRef } from 'react';

import { Container } from '@/ui/components/atoms/Container';
import { Typography } from '@/ui/components/atoms/Typography';

import { InternalLink } from '@/components/atoms/InternalLink';
import { Nav } from '@/components/molecules/Nav';

import { classNames as cn } from '@/ui/utils';
import { MAX_WIDTH } from '@/utils/constants';

import { HeaderProps } from './types';

import styles from './Header.module.css';

const Header = forwardRef(function Header(
  { className }: HeaderProps,
  ref?: React.ForwardedRef<HTMLElement>
) {
  return (
    <header ref={ref} className={cn('Header-root', styles.root, className)}>
      <Container className={styles.container} maxWidth={MAX_WIDTH}>
        <Typography component="h1" variant="h6">
          <InternalLink href="/" title="Home" underline="hover">
            {process.env.NEXT_PUBLIC_TITLE}
          </InternalLink>
        </Typography>

        <Nav />
      </Container>
    </header>
  );
});

export default Header;
