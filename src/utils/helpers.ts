export const request = (
  input: string | URL | globalThis.Request,
  init?: RequestInit
) =>
  fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  }).then(res => {
    if (res.ok) return res;
    throw res;
  });

const collator = new Intl.Collator();

export const sortBy =
  (field: string, reverse = 1) =>
  (a: any, b: any) => {
    const A = a?.[field];
    const B = b?.[field];

    if (typeof A === 'number' && typeof B === 'number') {
      return reverse * (A - B);
    }

    return reverse * collator.compare(A, B);
  };
