import { StoreNamespace } from '../types/store-namespace.ts';
import {userProcess} from './user/user-reducer.ts';
import {dataProcess} from './offers/offers-reducer.ts';
import {singleOfferProcess} from './single-offer/single-offer-reducer.ts';
import {combineReducers} from '@reduxjs/toolkit';


export const rootReducer = combineReducers({
  [StoreNamespace.Offers]: dataProcess.reducer,
  [StoreNamespace.User]: userProcess.reducer,
  [StoreNamespace.SingleOffer]: singleOfferProcess.reducer,
});
