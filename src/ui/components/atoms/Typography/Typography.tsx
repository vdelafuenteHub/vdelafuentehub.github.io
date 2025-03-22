import { forwardRef } from 'react';
import cn from '../../../utils/classNames';
import isValidElementType from '../../../utils/isValidElementType';
import { TypographyProps, TypographyVariants } from './types';

import styles from './Typography.module.css';

const Typography = forwardRef(function Typography(
  {
    className,
    component: Cmp = 'div',
    align,
    gutterBottom,
    noWrap,
    variant = TypographyVariants.BODY1,
    ...restProps
  }: TypographyProps,
  ref
) {
  if (!isValidElementType(Cmp)) {
    throw new Error('Attention Typography needs a valid component property');
  }

  return (
    <Cmp
      ref={ref}
      className={cn(
        'Typography-root',
        styles.root,
        align && styles[align],
        gutterBottom && styles.gutterBottom,
        noWrap && styles.noWrap,
        variant && styles[variant],
        className
      )}
      {...restProps}
    />
  );
});

export default Typography;
