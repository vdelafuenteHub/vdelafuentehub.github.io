import NextImage from 'next/image';

import { classNames } from '@/ui/utils';

import { AvatarProps } from './types';

import styles from './Avatar.module.css';

const Avatar = ({
  className,
  alt = 'avatar',
  align,
  ...restProps
}: AvatarProps) => (
  <NextImage
    className={classNames(
      'Avatar-root',
      styles.root,
      align && styles[align],
      className
    )}
    alt={alt}
    {...restProps}
  />
);

export default Avatar;
