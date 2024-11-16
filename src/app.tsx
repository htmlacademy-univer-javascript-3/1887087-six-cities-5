import Main, {MainProps} from './pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './consts.ts';
import {Login} from './pages/login/login.tsx';
import {Offer} from './pages/offer/offer.tsx';
import {NotFound} from './pages/not-found/not-found.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {PrivateRoute} from './components/private-route/privare-route.tsx';
import {Favorites} from './pages/favorites/favorites.tsx';

export type AppProps = {
  MainProps: MainProps;
}

export function App(props: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main {...props.MainProps}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                <Favorites/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
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
