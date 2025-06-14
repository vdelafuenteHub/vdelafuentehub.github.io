export const request = (
  input: string | URL | globalThis.Request,
  init?: RequestInit
) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
    },
  }).then(res => {
    if (res.ok) return res;
    throw res;
  });

const collator = new Intl.Collator();

export const sortBy =
  (field: string, reverse?: boolean) => (a: any, b: any) => {
    const sign = reverse ? -1 : 1;

    const A = a?.[field];
    const B = b?.[field];

    if (typeof A === 'number' && typeof B === 'number') {
      return sign * (A - B);
    }

    return sign * collator.compare(A, B);
  };
