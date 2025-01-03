import {Helmet} from 'react-helmet-async';
import {AppName, AuthorizationStatus, DefaultCity} from '../../consts.ts';
import {ReviewForm} from '../../components/review/review-form.tsx';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {Map} from '../../components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {fetchSingleOffer} from '../../store/api-actions.ts';
import {
  getNearbyOffers,
  getReviews,
  getSingleOffer,
  getSingleOfferDataLoadingStatus
} from '../../store/single-offer/single-offer.selectors.ts';
import clsx from 'clsx';
import {WordCapitalize} from '../../helpers/helpers.ts';
import {Reviews} from '../../components/review/reviews.tsx';
import {getAuthorizationStatus, getUserInfo} from '../../store/user/user.selectors.ts';
import {OfferCard} from '../../components/offers/card/offer-card.tsx';
import {OfferCardType} from '../../components/offers/card/offer-card-styles.ts';
import {NotFound} from '../not-found/not-found.tsx';
import {Loading} from '../../components/loading/Loading.tsx';
import {NavBar} from '../../components/nav-bar/nav-bar.tsx';

export function Offer() {
  const offerId = useParams<{ id: string }>().id;

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (offerId !== undefined){
      dispatch(fetchSingleOffer({ offerId }));
    }
  }, [offerId, dispatch]);

  const userInfo = useAppSelector(getUserInfo);
  const offer = useAppSelector(getSingleOffer);
  const isLoaded = useAppSelector(getSingleOfferDataLoadingStatus);
  const reviews = useAppSelector(getReviews);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOfferPosted = reviews.some((review) => review.user.name === userInfo?.name);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  if (!isLoaded) {
    return <Loading />;
  }

  if (offer === null) {
    return <NotFound />;
  }

  return (
    <>
      <NavBar/>
      <div className="page">
        <Helmet>
          <title>{AppName}. Offer</title>
        </Helmet>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button
                    className={clsx('offer__bookmark-button', 'button', offer.isFavorite && 'offer__bookmark-button--active')}
                    type="button"
                  >
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${((offer.rating ?? 0) * 20)}%`}}>
                      <span className="visually-hidden">Rating</span>
                    </span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{WordCapitalize(offer.type)}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => (
                      <li className="offer__inside-item" key={good}>{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div
                      className={clsx('offer__avatar-wrapper', 'user__avatar-wrapper', offer.host.isPro && 'offer__avatar-wrapper--pro')}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <Reviews Reviews={reviews}></Reviews>
                  {authorizationStatus === AuthorizationStatus.Auth && !isOfferPosted && <ReviewForm OfferId={offer.id ?? ''}/>}
                </section>
              </div>
            </div>
            <Map
              City={offer.city ?? DefaultCity}
              Offers={[...nearbyOffers, offer]}
              ActiveOffer={offer}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
              Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((nearbyOffer) => (
                  <OfferCard Offer={nearbyOffer} OfferCardType={OfferCardType.Nearby} key={nearbyOffer.id} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
