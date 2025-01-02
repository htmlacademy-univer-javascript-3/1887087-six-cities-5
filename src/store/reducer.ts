import {AuthorizationStatus, DefaultCity} from '../consts.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setOfferDataLoadingStatus, setAuthorizationStatus, setUserInfo} from './actions.ts';
import {Offer} from '../types/offer.ts';
import {Store} from '../types/state.ts';

const initialState: Store = {
  AuthorizationStatus: AuthorizationStatus.Unknown,
  City: DefaultCity,
  Offers: new Array<Offer>(),
  IsOfferDataLoaded: false,
  UserInfo: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.City = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.Offers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.IsOfferDataLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.AuthorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.UserInfo = action.payload;
    });
});
