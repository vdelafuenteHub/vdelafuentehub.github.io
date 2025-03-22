export enum ContainerMaxWidths {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export type ContainerProps = {
  component?: React.ElementType;
  disableGutters?: boolean;
  maxWidth?: `${ContainerMaxWidths}` | React.CSSProperties['maxWidth'];
} & React.AllHTMLAttributes<React.ElementType>;
