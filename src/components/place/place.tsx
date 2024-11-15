import {PlaceType} from './placeType.tsx';

export type PlaceProps = {
  CostPerNight: number;
  Name: string;
  Type: PlaceType;
  Rating: number;
  Image: string;
  InBookmarks: boolean;
  IsPremium: boolean;
};

function Premium(premiumInfo: {isPremium: boolean}) {
  if (!premiumInfo.isPremium){
    return null;
  }
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export function Place(props: PlaceProps) {
  return (
    <article className="cities__card place-card">
      <Premium isPremium={props.IsPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
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
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
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
        <h2 className="place-card__name">
          <a href="#">{props.Name}</a>
        </h2>
        <p className="place-card__type">{props.Type}</p>
      </div>
    </article>
  );
}

