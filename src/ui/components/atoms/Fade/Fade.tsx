import { cloneElement, forwardRef, isValidElement, useRef } from 'react';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import useForkRef from '../../../hooks/useForkRef';
import getReactElementRef from '../../../utils/getReactElementRef';
import { FadeProps } from './types';

const TRANSITION_STYLES: Record<TransitionStatus, { opacity?: 0 | 1 }> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const setTransitionStyle = (state: TransitionStatus) =>
  TRANSITION_STYLES[state];

const Fade = forwardRef(function Fade(
  { children, in: inProp, timeout = 225, ...restProps }: FadeProps,
  ref
) {
  if (!isValidElement(children)) {
    throw new Error('Attention Fade needs a valid children property');
  }

  const nodeRef = useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  return (
    <Transition
      nodeRef={nodeRef}
      in={inProp}
      appear={true}
      timeout={timeout}
      {...restProps}
    >
      {(state, childProps) =>
        cloneElement(children, {
          ref: handleRef,
          style: {
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            opacity: 0,
            transition: `opacity ${timeout}ms ease-in-out`,
            ...setTransitionStyle(state),
            ...(children?.props as { style?: React.CSSProperties })?.style,
          },
          ...childProps,
        } as any)
      }
    </Transition>
  );
});

export default Fade;
