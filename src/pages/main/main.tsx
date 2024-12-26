import {OfferCardList} from '../../components/offers/offer-card-list.tsx';
import {Helmet} from 'react-helmet-async';
import {AppName} from '../../consts.ts';
import {Map} from '../../components/map/map.tsx';
import {CitiesList} from '../../components/cities/cities-list.tsx';
import {useAppSelector} from '../../store/hooks.ts';

export function Main() {
  const currentCity = useAppSelector((store) => store.City);
  const offers = useAppSelector((store) => store.Offers)
    .filter((offer) => offer.City.Name === currentCity.Name);

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
              <b className="places__found">{offers.length} places to stay in {currentCity.Name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                      Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                      Top rated first
                  </li>
                </ul>
              </form>
              <OfferCardList Offers={offers}/>
            </section>
            <div className="cities__right-section">
              <Map City={currentCity} Offers={offers} SelectedOffer={undefined}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
