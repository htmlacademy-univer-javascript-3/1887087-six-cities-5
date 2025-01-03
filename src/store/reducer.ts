import { StoreNamespace } from '../types/store-namespace.ts';
import {userProcess} from './user/user.slice.ts';
import {dataProcess} from './offers/offers.slice.ts';
import {singleOfferProcess} from './single-offer/single-offer.slice.ts';
import {combineReducers} from '@reduxjs/toolkit';


export const rootReducer = combineReducers({
  [StoreNamespace.Offers]: dataProcess.reducer,
  [StoreNamespace.User]: userProcess.reducer,
  [StoreNamespace.SingleOffer]: singleOfferProcess.reducer,
});
