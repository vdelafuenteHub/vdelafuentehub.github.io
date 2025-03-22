import { SvgIcon } from '@/ui/components/atoms/SvgIcon';

import { ExternalLink } from '@/components/atoms/ExternalLink';
import { InternalLink } from '@/components/atoms/InternalLink';

import LinkedinIcon from '@/images/linkedin.svg';
import { Typography } from '@/ui/components/atoms/Typography';

import { useIntl } from '@/ui/plugins/Intl';

import styles from './Nav.module.css';

const Nav = () => {
  const { t } = useIntl();

  return (
    <Typography className={styles.root} variant="body2">
      <nav>
        <InternalLink href="about" title={t('common.about')} underline="hover">
          {t('common.about')}
        </InternalLink>
      </nav>

      <aside>
        <ExternalLink
          className={styles.iconLink}
          href="https://es.linkedin.com/in/vdelafuente"
          title="vdelafuente"
          underline="hover"
        >
          <SvgIcon component={LinkedinIcon} fontSize="small" />{' '}
          {t('common.follow-me')}
        </ExternalLink>
      </aside>
    </Typography>
  );
};

export default Nav;
