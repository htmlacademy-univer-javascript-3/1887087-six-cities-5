import {PlaceType} from './placeType.ts';
import {Premium} from './premium.tsx';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export type OfferProps = {
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


export function OfferCard(props: OfferProps) {
  const navigate = useNavigate();
  return (
    <article className="cities__card place-card" onClick={() => navigate(`${AppRoute.Offer}`)}>
      {props.IsPremium ? <Premium/> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a onClick={() => navigate(AppRoute.Offer)}>
          <img
            className="place-card__image"
            src={props.Image}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.CostPerNight}</b>
            <span className="place-card__price-text">
                /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${props.InBookmarks ? 'place-card__bookmark-button--active' : ''}`}
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
            <span style={{width: `${props.Rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => navigate(AppRoute.Offer)}>
          <a>{props.Name}</a>
        </h2>
        <p className="place-card__type">{props.Type}</p>
      </div>
    </article>
  );
}

