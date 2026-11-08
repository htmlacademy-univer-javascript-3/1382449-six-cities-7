import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/privtate-route';
import { Offer } from '../mocks/offers';
import { Review } from '../mocks/reviews';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
};

export default function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage offers={offers} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/favourites' element={
            <PrivateRoute>
              <FavouritesPage offers={offers.filter((offer) => offer.isFavorite)} />
            </PrivateRoute>
          }
          />
          <Route path='/offer/:id' element={<OfferPage offers={offers} reviews={reviews} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
