import { Offer } from '../../types/offer';
import { SingleOffer } from '../../types/single-offer';
import { State } from '../../types/state';
import { StoreNamespace } from '../../types/store-namespace';
import {Review} from '../../types/review.ts';

export const getSingleOffer = (state: State): SingleOffer | null =>
  state[StoreNamespace.SingleOffer].Offer;
export const getNearbyOffers = (state: State): Offer[] =>
  state[StoreNamespace.SingleOffer].NearbyOffers;
export const getReviews = (state: State): Review[] =>
  state[StoreNamespace.SingleOffer].Reviews;
export const getSingleOfferDataLoadingStatus = (state: State): boolean =>
  state[StoreNamespace.SingleOffer].IsLoaded;
