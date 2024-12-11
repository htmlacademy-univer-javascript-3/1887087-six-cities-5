import {App,} from '../app.tsx';
import {offerProps} from './offers.ts';
import {ComponentProps} from 'react';
import {Offer} from '../types/offer.ts';

export const appMocks : ComponentProps<typeof App> = {
  MainProps:
    {
      Offers: {Offers: offerProps},
      PlacesCount: 312,
    },
  FavoritesProps:
    {
      Offers: offerProps.filter((offer: Offer) => offer.InBookmarks),
    }
};
