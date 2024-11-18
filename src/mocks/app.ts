import {AppProps} from '../app.tsx';
import {offerProps} from './offers.ts';
import {OfferProps} from '../components/offers/offer-card.tsx';

export const appMocks : AppProps = {
  MainProps:
    {
      Offers: {Offers: offerProps},
      PlacesCount: 312,
    },
  FavoritesProps:
    {
      Offers: offerProps.filter((offer: OfferProps) => offer.InBookmarks),
    }
};
