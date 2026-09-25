import MainPage from './pages/MainPage/MainPage';

type AppProps = {
  placesCount: number;
};

export default function App({ placesCount }: AppProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount } />
  );
}
