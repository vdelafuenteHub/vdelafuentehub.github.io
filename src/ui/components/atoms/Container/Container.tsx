import { forwardRef, useMemo } from 'react';
import cn from '../../../utils/classNames';
import isValidElementType from '../../../utils/isValidElementType';
import { ContainerMaxWidths, ContainerProps } from './types';

import styles from './Container.module.css';

const Container = forwardRef(function Container(
  {
    className,
    component: Cmp = 'div',
    disableGutters = false,
    maxWidth: maxWidthProp = ContainerMaxWidths.LG,
    style,
    ...restProps
  }: ContainerProps,
  ref
) {
  if (!isValidElementType(Cmp)) {
    throw new Error('Attention Container needs a valid component property');
  }

  const isWidth = useMemo(() => isMaxWidth(maxWidthProp), [maxWidthProp]);

  return (
    <Cmp
      ref={ref}
      className={cn(
        'Container-root',
        styles.root,
        disableGutters && styles.disableGutters,
        maxWidthProp && isWidth && styles[maxWidthProp],
        className
      )}
      style={{
        ...style,
        ...(!isWidth && {
          maxWidth: style?.maxWidth || maxWidthProp,
        }),
      }}
      {...restProps}
    />
  );
});

export default Container;

// auxiliary
function isMaxWidth(value: any) {
  return Object.values(ContainerMaxWidths).includes(value);
}
