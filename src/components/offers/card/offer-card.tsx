import {PlaceType} from './place-type.ts';
import {Premium} from './premium.tsx';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../consts.ts';
import clsx from 'clsx';
import {offerCardStyles, OfferCardType} from './offer-card-styles.ts';

export type Offer = {
  // eslint-disable-next-line react/no-unused-prop-types
  Id: string;
  CostPerNight: number;
  Name: string;
  // eslint-disable-next-line react/no-unused-prop-types
  City: string;
  Type: PlaceType;
  Rating: number;
  Image: string;
  InBookmarks: boolean;
  IsPremium: boolean;
};

type OfferCardProps = {
  Offer: Offer;
  OfferCardType: OfferCardType;
}


export function OfferCard(props: OfferCardProps) {
  const navigate = useNavigate();
  const styles = offerCardStyles[props.OfferCardType];
  return (
    <article className={`${styles.classPrefix}__card place-card`}>
      {props.Offer.IsPremium ? <Premium/> : null}
      <div className={`${styles.classPrefix}__image-wrapper place-card__image-wrapper`}>
        <a onClick={() => navigate(`${AppRoute.Offer}`)}>
          <img
            className="place-card__image"
            src={props.Offer.Image}
            width={styles.width}
            height={styles.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.Offer.CostPerNight}</b>
            <span className="place-card__price-text">
                /&nbsp;night
            </span>
          </div>
          <button
            className={clsx('place-card__bookmark-button', 'button', props.Offer.InBookmarks && 'place-card__bookmark-button--active')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${props.Offer.Rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => navigate(AppRoute.Offer)}>
          <a>{props.Offer.Name}</a>
        </h2>
        <p className="place-card__type">{props.Offer.Type}</p>
      </div>
    </article>
  );
}

