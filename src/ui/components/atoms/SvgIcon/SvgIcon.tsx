import { useMemo } from 'react';
import cn from '../../../utils/classNames';
import { SvgIconProps, SvgIconSizes } from './types';

import styles from './SvgIcon.module.css';

const SvgIcon = ({
  className,
  component: Cmp,
  fontSize: fontSizeProp,
  style,
  ...restProps
}: SvgIconProps) => {
  const isSize = useMemo(() => isSvgIconSize(fontSizeProp), [fontSizeProp]);

  return (
    <Cmp
      className={cn(
        'SvgIcon-root',
        styles.root,
        fontSizeProp && isSize && styles[fontSizeProp],
        className
      )}
      style={{
        ...style,
        ...(!isSize && {
          fontSize: style?.fontSize || fontSizeProp,
        }),
      }}
      focusable={false}
      aria-hidden={true}
      {...restProps}
    />
  );
};

export default SvgIcon;

// auxiliary
function isSvgIconSize(value: any) {
  return Object.values(SvgIconSizes).includes(value);
}
