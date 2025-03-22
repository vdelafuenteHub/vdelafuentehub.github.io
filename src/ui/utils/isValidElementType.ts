const isValidElementType = (Component: any): boolean =>
  typeof Component === 'string' || typeof Component === 'function';

export default isValidElementType;
