import { useMemo } from 'react';

import setRef from '../../utils/setRef';

const useForkRef = <Instance>(
  ...refs: Array<React.Ref<Instance> | undefined>
): React.RefCallback<Instance> | null =>
  useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }

    return instance => {
      refs.forEach(ref => {
        setRef(ref, instance);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);

export default useForkRef;
