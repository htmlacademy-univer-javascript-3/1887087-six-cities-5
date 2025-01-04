import {FavoritesOfferCardList} from '../../components/favorites/favorite-city-section.tsx';
import {NavBar} from '../../components/nav-bar/nav-bar.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {getFavoriteOffers} from '../../store/user/user.selectors.ts';

export function Favorites() {
  const favoritesOffers = useAppSelector(getFavoriteOffers);

  return (
    <>
      <NavBar/>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {favoritesOffers.length === 0 ?
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </section> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesOfferCardList/>
              </section>}
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img
              className="footer__logo"
              src="public/img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </Link>
        </footer>
      </div>
    </>
  );
}
