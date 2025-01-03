import {Main} from './pages/main/main.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from './consts.ts';
import {Login} from './pages/login/login.tsx';
import {Offer} from './pages/offer/offer.tsx';
import {NotFound} from './pages/not-found/not-found.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {PrivateRoute} from './components/private-route/privare-route.tsx';
import {Favorites} from './pages/favorites/favorites.tsx';
import {useAppSelector} from './store/hooks.ts';
import {Loading} from './components/loading/Loading.tsx';
import HistoryRouter from './components/route/history-router.tsx';
import browserHistory from './browser-history.ts';
import {isOffersLoaded} from './store/offers/offers-selectors.ts';

export function App() {
  const isOfferLoaded = useAppSelector(isOffersLoaded);

  if (!isOfferLoaded) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index
            path={AppRoute.Main}
            element={<Main/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer/>}
          />
          <Route
            path={'/*'}
            element={<NotFound/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
