export type FadeProps = React.PropsWithChildren<{
  in: boolean;
  timeout?: number;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}>;
