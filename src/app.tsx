import Main, {MainProps} from './pages/main/main.tsx';

export type AppProps = {
  MainProps: MainProps;
}

export function App(props: AppProps): JSX.Element {
  return (
    <Main {...props.MainProps} />
  );
}
