import {GroupBy} from '../../helpers/helpers.ts';
import {OfferCardType} from '../offers/card/offer-card-styles.ts';
import {Offers} from '../../types/offer.ts';
import {OfferCard} from '../offers/card/offer-card.tsx';

type FavoritesOfferCardListProps = {
  Offers: Offers;
}

export function FavoritesOfferCardList(props: FavoritesOfferCardListProps) {
  const cityGroups = GroupBy(props.Offers, 'city');
  const citiesSet = new Set(props.Offers.map((offer) => offer.city));
  const cities = Array.from(citiesSet.values());

  return (
    <ul className="favorites__list">
      {cities.map((cityName) => (
        <li className="favorites__locations-items" key={cityName.name}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityGroups.get(cityName)?.map((city) =>
              (
                <OfferCard
                  Offer={{...city}}
                  OfferCardType={OfferCardType.Favorites}
                  key={city.id}
                />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
