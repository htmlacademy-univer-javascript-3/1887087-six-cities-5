import {Premium} from './premium.tsx';
import {Link} from 'react-router-dom';
import {offerCardStyles, OfferCardType} from './offer-card-styles.ts';
import {Offer} from '../../../types/offer.ts';
import {Bookmark} from '../../bookmarks/bookmark.tsx';
import {BookmarkStyle} from '../../bookmarks/bookmark-styles.ts';

type OfferCardProps = {
  Offer: Offer;
  OfferCardType: OfferCardType;
}


export function OfferCard(props: OfferCardProps) {

  const styles = offerCardStyles[props.OfferCardType];

  return (
    <article className={`${styles.classPrefix}__card place-card`}>
      {props.Offer.isPremium ? <Premium/> : null}
      <div className={`${styles.classPrefix}__image-wrapper place-card__image-wrapper`}>
        <a>
          <img
            className="place-card__image"
            src={props.Offer.previewImage}
            width={styles.width}
            height={styles.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.Offer.price}</b>
            <span className="place-card__price-text">
                /&nbsp;night
            </span>
          </div>
          <Bookmark Offer={props.Offer} BookmarkStyle={BookmarkStyle.OfferCard} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(props.Offer.rating) * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" >
          <Link to={`/offer/${props.Offer.id}`}>{props.Offer.title}</Link>
        </h2>
        <p className="place-card__type">{props.Offer.type}</p>
      </div>
    </article>
  );
}

