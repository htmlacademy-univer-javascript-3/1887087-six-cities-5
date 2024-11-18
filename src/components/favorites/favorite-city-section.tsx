import {GroupBy} from '../../helpers/helpers.ts';
import {Offer, OfferCard} from '../offers/card/offer-card.tsx';
import {OfferCardType} from '../offers/card/offer-card-styles.ts';

type FavoritesOfferCardListProps = {
  Offers: Offer[];
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
            {cityGroups.get(cityName)?.map((city) =>
              (
                <OfferCard
                  Offer={{...city}}
                  OfferCardType={OfferCardType.FavoritesPage}
                  key={city.Id}
                />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
