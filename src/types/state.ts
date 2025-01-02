import { store } from '../store';
import {AuthorizationStatus} from '../consts.ts';
import {Offers} from './offer.ts';
import {UserInfo} from './user-info.ts';
import {City} from './city.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Store = {
  AuthorizationStatus: AuthorizationStatus;
  City: City;
  Offers: Offers;
  IsOfferDataLoaded: boolean;
  UserInfo: UserInfo|null;
};
