export enum SvgIconSizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export type SvgIconProps = {
  component: React.ElementType;
  fontSize?: `${SvgIconSizes}` | React.CSSProperties['fontSize'];
} & React.SVGAttributes<HTMLOrSVGElement>;
