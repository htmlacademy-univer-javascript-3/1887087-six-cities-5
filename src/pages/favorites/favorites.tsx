import {FavoritesOfferCardList} from '../../components/favorites/favorite-city-section.tsx';
import {Offer} from '../../types/offer.ts';
import {NavBar} from '../../components/nav-bar/nav-bar.tsx';

export function Favorites() {
  return (
    <>
      <NavBar/>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesOfferCardList Offers={new Array<Offer>()}/>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </a>
        </footer>
      </div>
    </>
  );
}
