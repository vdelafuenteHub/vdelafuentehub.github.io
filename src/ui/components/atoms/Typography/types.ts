export enum TypographyAligns {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export enum TypographyVariants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  BODY1 = 'body1',
  BODY2 = 'body2',
  INHERIT = 'inherit',
}

export type TypographyProps = {
  component?: React.ElementType;
  align?: `${TypographyAligns}`;
  gutterBottom?: boolean;
  noWrap?: boolean;
  variant?: `${TypographyVariants}`;
} & React.AllHTMLAttributes<React.ElementType>;
