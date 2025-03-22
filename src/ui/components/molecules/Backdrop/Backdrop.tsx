import { forwardRef, isValidElement } from 'react';
import cn from '../../../utils/classNames';
import Fade from '../../atoms/Fade/Fade';
import { BackdropProps } from './types';

import styles from './Backdrop.module.css';

const Backdrop = forwardRef(function Backdrop(
  {
    className,
    open,
    component: Cmp = 'div',
    zIndex,
    style,
    ...restProps
  }: BackdropProps,
  ref
) {
  if (!isValidElement(<Cmp />)) {
    throw new Error('Attention Backdrop needs a valid component property');
  }

  return (
    <Fade in={open}>
      <Cmp
        ref={ref}
        className={cn('Backdrop-root', styles.root, className)}
        aria-hidden="true"
        style={{
          ...style,
          zIndex,
        }}
        {...restProps}
      />
    </Fade>
  );
});

export default Backdrop;
