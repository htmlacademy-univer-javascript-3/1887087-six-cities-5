import { StoreNamespace } from '../../types/store-namespace';
import {Offers} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {State} from '../hooks.ts';

export const getOffers = (state: State): Offers =>
  state[StoreNamespace.Offers].Offers;
export const isOffersLoaded = (state: State): boolean =>
  state[StoreNamespace.Offers].IsLoaded;
export const getCurrentCity = (state: State): City =>
  state[StoreNamespace.Offers].City;
