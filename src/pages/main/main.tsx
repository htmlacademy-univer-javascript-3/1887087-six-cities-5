import {Helmet} from 'react-helmet-async';
import {AppName} from '../../consts.ts';
import {OfferCardList} from '../../components/offers/offer-card-list.tsx';
import {ComponentProps, useState} from 'react';
import Map from '../../components/map/map.tsx';
import {City} from '../../types/city.ts';
import {amsterdam} from '../../mocks/cities.ts';

type MainProps = {
  PlacesCount: number;
  Offers: ComponentProps<typeof OfferCardList>;
}

export function Main(props: MainProps) {
  const [currentCity, ] = useState<City>(amsterdam);

  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>{AppName}. Booking search</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.PlacesCount} places to stay in Amsterdam</b>
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
              <OfferCardList {...props.Offers}/>
            </section>
            <div className="cities__right-section">
              <section className=""/>
              <Map city={currentCity} offers={props.Offers.Offers} selectedOffer={undefined}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
