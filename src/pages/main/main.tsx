import {Helmet} from 'react-helmet-async';
import {AppName, SortOptions} from '../../consts.ts';
import {Map} from '../../components/map/map.tsx';
import {CitiesList} from '../../components/cities/cities-list.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {useState} from 'react';
import {OfferSortDropdown} from '../../components/offers/sort/offer-sort-dropdown.tsx';
import {OfferCardList} from '../../components/offers/card-list/offer-card-list.tsx';
import {OfferSortCompareFunctions} from '../../components/offers/sort/offer-sort.ts';
import {Offer} from '../../types/offer.ts';

export function Main() {
  const [offerSortOptions, setOfferSortOptions] = useState<SortOptions>(SortOptions.Popular);
  const [activeOffer, setActiveOffer] = useState<Offer|null>(null);

  const currentCity = useAppSelector((store) => store.City);
  const sortedOffers = useAppSelector((store) => store.Offers)
    .filter((offer) => offer.City.Name === currentCity.Name)
    .toSorted(OfferSortCompareFunctions[offerSortOptions]);

  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>{AppName}. Booking search</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList></CitiesList>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCity.Name}</b>
              <OfferSortDropdown SortOption={offerSortOptions} OnSortOptionChange={setOfferSortOptions}/>
              <OfferCardList Offers={sortedOffers} OnActiveOfferChange={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <Map City={currentCity} Offers={sortedOffers} ActiveOffer={activeOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
