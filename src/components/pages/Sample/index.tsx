import { useIntl } from '@/ui/plugins/Intl';

const Sample = () => {
  const { t } = useIntl();

  return (
    <>
      <p>{t('text')}</p>
    </>
  );
};

export default Sample;
