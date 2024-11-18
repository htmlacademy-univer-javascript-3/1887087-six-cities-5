import {OfferCard} from './offer-card.tsx';
import {ComponentProps, useState} from 'react';

type OfferListProps = {
  Offers: ComponentProps<typeof OfferCard>[];
};

export function OfferCardList(props: OfferListProps) {
  const [, setActiveCardId] = useState<string|null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.Offers.map(((offer) =>
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
            <OfferCard {...offer} />
          </span>
        )
      ))}
    </div>
  );
}
