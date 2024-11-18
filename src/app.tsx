import {Main} from './pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './consts.ts';
import {Login} from './pages/login/login.tsx';
import {Offer} from './pages/offer/offer.tsx';
import {NotFound} from './pages/not-found/not-found.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {PrivateRoute} from './components/private-route/privare-route.tsx';
import {Favorites} from './pages/favorites/favorites.tsx';
import {NavBar} from './components/nav-bar/nav-bar.tsx';
import {ComponentProps} from 'react';

type AppProps = {
  MainProps: ComponentProps<typeof Main>;
  FavoritesProps: ComponentProps<typeof Favorites>;
}

export function App(props: AppProps) {
  return (
    <HelmetProvider>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route index
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
                <Favorites {...props.FavoritesProps}/>
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
