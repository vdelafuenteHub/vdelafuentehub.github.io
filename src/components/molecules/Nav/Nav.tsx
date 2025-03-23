import { SvgIcon } from '@/ui/components/atoms/SvgIcon';
import { Typography } from '@/ui/components/atoms/Typography';
import { useIntl } from '@/ui/plugins/Intl';

import { ExternalLink } from '@/components/atoms/ExternalLink';
import { InternalLink } from '@/components/atoms/InternalLink';
import { LocaleSwitcher } from '@/components/atoms/LocaleSwitcher';
import LinkedinIcon from '@/images/linkedin.svg';
import { classNames as cn } from '@/ui/utils';

import { i18n } from '~/i18n.config';

import styles from './Nav.module.css';

const Nav = () => {
  const { activeLocale, t } = useIntl();

  return (
    <Typography className={cn('Nav-root', styles.root)} variant="body2">
      <LocaleSwitcher
        className={styles.lang}
        locale={activeLocale}
        locales={i18n?.locales.map(lng => ({
          label: lng,
          title: t(`common.${lng}`),
          value: lng,
        }))}
      />

      <div className={styles.toolbar}>
        <nav className={styles.navigation}>
          <InternalLink
            href="about"
            title={t('common.about')}
            underline="hover"
          >
            {t('common.about')}
          </InternalLink>
        </nav>

        <aside className={styles.aside}>
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
      </div>
    </Typography>
  );
};

export default Nav;
