import {Offer, OfferCard} from './card/offer-card.tsx';
import {useState} from 'react';
import {OfferCardType} from './card/offer-card-styles.ts';

type OfferListProps = {
  Offers: Offer[];
};

export function OfferCardList(props: OfferListProps) {
  const [, setActiveCardId] = useState<string|null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.Offers.map((offer) =>
        (
          <span
            key={offer.Id}
            onMouseEnter={() => {
              setActiveCardId(offer.Id);
            }}
            onMouseLeave={() => {
              setActiveCardId(null);
            }}
          >
            <OfferCard Offer={offer} OfferCardType={OfferCardType.MainPage}/>
          </span>
        )
      )}
    </div>
  );
}
