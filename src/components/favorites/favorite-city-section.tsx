import {OfferCardType} from '../offers/offer-card/offer-card-styles.ts';
import {OfferCard} from '../offers/offer-card/offer-card.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {getFavoriteOffers} from '../../store/user/user.selectors.ts';
import {AllCities} from '../../consts.ts';


export function FavoritesOfferCardList() {
  const favoritesOffers = useAppSelector(getFavoriteOffers);
  const cities = AllCities
    .filter((city) => favoritesOffers.some((offer) => offer.city.name === city.name));

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city.name}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesOffers
              .filter((offer) => offer.city.name === city.name)
              .map((offer) =>
                (
                  <OfferCard
                    Offer={{...offer}}
                    OfferCardType={OfferCardType.Favorites}
                    key={offer.id}
                  />
                ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
