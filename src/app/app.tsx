import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/privtate-route';

type AppProps = {
  placesCount: number;
};

export default function App({ placesCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage placesCount={placesCount} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/favourites' element={
            <PrivateRoute>
              <FavouritesPage />
            </PrivateRoute>
          }
          />
          <Route path='/offer/:id' element={<OfferPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
