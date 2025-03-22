import React from 'react';

const getReactElementRef = (
  element: React.ReactElement
): React.Ref<any> | null => {
  if (parseInt(React.version, 10) >= 19) {
    return (element?.props as any)?.ref || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  return element?.ref || null;
};

export default getReactElementRef;
