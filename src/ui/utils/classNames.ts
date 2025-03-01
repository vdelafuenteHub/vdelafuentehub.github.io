const classNames = (
  ...classes: Array<string | number | boolean | undefined>
): string => classes?.filter(Boolean).join(' ').trim();

export default classNames;
