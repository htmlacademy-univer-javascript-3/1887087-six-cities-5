import {OfferProps} from '../offers/offer-card.tsx';
import {GroupBy} from '../../helpers/helpers.ts';
import {FavoriteOfferCard} from './favorite-offer-card.tsx';

export type FavoritesOfferCardListProps = {
  Offers: OfferProps[];
}

export function FavoritesOfferCardList(props: FavoritesOfferCardListProps) {
  const cityGroups = GroupBy(props.Offers, 'City');
  const citiesSet = new Set(props.Offers.map((offer) => offer.City));
  const cities = Array.from(citiesSet.values());

  return (
    <ul className="favorites__list">
      {cities.map((cityName) => (
        <li className="favorites__locations-items" key={cityName}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityGroups.get(cityName)?.map((city) => <FavoriteOfferCard {...city} key={city.Id}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}
