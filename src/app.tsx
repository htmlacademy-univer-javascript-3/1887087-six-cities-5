import Main, {MainProps} from './pages/main/main.tsx';

export type AppProps = {
  MainProps: MainProps;
}

export function App(props: AppProps) {
  return (
    <Main {...props.MainProps} />
  );
}
