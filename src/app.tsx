import {Main} from './pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './consts.ts';
import {Login} from './pages/login/login.tsx';
import {Offer} from './pages/offer/offer.tsx';
import {NotFound} from './pages/not-found/not-found.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {PrivateRoute} from './components/private-route/privare-route.tsx';
import {Favorites} from './pages/favorites/favorites.tsx';
import {useAppSelector} from './store/hooks.ts';
import {Loading} from './components/loading/Loading.tsx';

export function App() {
  const isOfferLoaded = useAppSelector((store) => store.IsOfferDataLoaded);

  if (!isOfferLoaded) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
      </BrowserRouter>
    </HelmetProvider>
  );
}
