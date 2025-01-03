import {OfferCard} from '../card/offer-card.tsx';
import {OfferCardType} from '../card/offer-card-styles.ts';
import {Offer, Offers} from '../../../types/offer.ts';

type OfferListProps = {
  Offers: Offers;
  OnActiveOfferChange: (offer: Offer|null) => void;
};

export function OfferCardList(props: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.Offers.map((offer) =>
        (
          <span
            key={offer.id}
            onMouseEnter={() => {
              props.OnActiveOfferChange(offer);
            }}
            onMouseLeave={() => {
              props.OnActiveOfferChange(null);
            }}
          >
            <OfferCard Offer={offer} OfferCardType={OfferCardType.Main}/>
          </span>
        )
      )}
    </div>
  );
}
