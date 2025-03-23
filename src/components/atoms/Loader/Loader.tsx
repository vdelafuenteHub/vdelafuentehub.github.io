import { SvgIcon } from '@/ui/components/atoms/SvgIcon';
import { Backdrop } from '@/ui/components/molecules/Backdrop';

import SpinnerIcon from '@/images/180-ring-with-bg.svg';

import { LoaderProps } from './types';

const Loader = ({ Icon = SpinnerIcon, ...restProps }: LoaderProps) => (
  <Backdrop open>
    <div role="status" {...restProps}>
      <SvgIcon component={Icon} fontSize={100} />
    </div>
  </Backdrop>
);

export default Loader;
