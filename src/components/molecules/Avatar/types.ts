import { ImageProps as NextImageProps } from 'next/image';

export enum AvatarAligns {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export type AvatarProps = { align?: `${AvatarAligns}` } &
  NextImageProps;
