import { Container } from '@/ui/components/atoms/Container';
import { SvgIcon } from '@/ui/components/atoms/SvgIcon';
import { Typography } from '@/ui/components/atoms/Typography';
import { useIntl } from '@/ui/plugins/Intl';

import { ExternalLink } from '@/components/atoms/ExternalLink';

import GithubIcon from '@/images/github.svg';
import { classNames as cn } from '@/ui/utils';
import { MAX_WIDTH } from '@/utils/constants';

import { FooterProps } from './types';

import styles from './Footer.module.css';

const Footer = ({ className }: FooterProps) => {
  const { t } = useIntl();

  return (
    <footer className={cn('Footer-root', styles.root, className)}>
      <Typography
        component={({ className, ...rest }) => (
          <Container
            {...rest}
            className={cn(styles.container, className)}
            maxWidth={MAX_WIDTH}
          />
        )}
        variant="body2"
      >
        <ExternalLink
          href="https://github.com/vdelafuenteHub"
          title="vdelafuenteHub"
          underline="hover"
        >
          @vdelafuenteHub
        </ExternalLink>

        <ExternalLink
          href="https://github.com/vdelafuenteHub/vdelafuentehub.github.io"
          title="vdelafuentehub.github.io"
          underline="hover"
        >
          <SvgIcon component={GithubIcon} />
          <span className="sr-only">{t('common.code')}</span>
        </ExternalLink>
      </Typography>
    </footer>
  );
};

export default Footer;
