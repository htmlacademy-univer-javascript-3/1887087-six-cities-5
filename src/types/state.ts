import { store } from '../store';
import {AuthorizationStatus} from '../consts.ts';
import {Offer, Offers} from './offer.ts';
import {UserInfo} from './user-info.ts';
import {City} from './city.ts';
import {SingleOffer} from './single-offer.ts';
import {Review} from './review.ts';
import {ReviewStatus} from './review-status.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  AuthorizationStatus: AuthorizationStatus;
  UserInfo: UserInfo | null;
  FavoriteOffers: Offer[];
  IsLoaded: boolean;
};

export type OffersState = {
  City: City;
  Offers: Offers;
  IsLoaded: boolean;
};

export type SingleOfferState = {
  Offer: SingleOffer | null;
  Reviews: Review[];
  IsLoaded: boolean;
  NearbyOffers: Offers;
  ReviewStatus: ReviewStatus;
};
