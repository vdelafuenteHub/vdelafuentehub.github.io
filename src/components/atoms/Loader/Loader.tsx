import { SvgIcon } from '@/ui/components/atoms/SvgIcon';
import { Backdrop } from '@/ui/components/molecules/Backdrop';
import { useIntl } from '@/ui/plugins/Intl';

import SpinnerIcon from '@/images/180-ring-with-bg.svg';

const Loader = () => {
  const { t } = useIntl();

  return (
    <Backdrop open>
      <div role="status" aria-label={t('common.loading')}>
        <SvgIcon component={SpinnerIcon} fontSize={100} />
      </div>
    </Backdrop>
  );
};

export default Loader;
