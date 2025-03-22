import { forwardRef } from 'react';
import cn from '../../../utils/classNames';
import Typography from '../../atoms/Typography/Typography';
import { LinkProps, LinkUnderlines } from './types';

import styles from './Link.module.css';

const Link = forwardRef(function Link(
  { className, underline = LinkUnderlines.ALWAYS, ...restProps }: LinkProps,
  ref
) {
  return (
    <Typography
      ref={ref}
      className={cn(
        'Link-root',
        styles.root,
        underline && styles[underline],
        className
      )}
      component="a"
      variant="inherit"
      {...restProps}
    />
  );
});

export default Link;
