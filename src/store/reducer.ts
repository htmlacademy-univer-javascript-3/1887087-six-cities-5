import {DefaultCity} from '../consts.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setOfferDataLoadingStatus} from './actions.ts';
import {Offer} from '../types/offer.ts';

const initialState = {
  City: DefaultCity,
  Offers: new Array<Offer>(),
  IsOfferDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.City = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.Offers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.IsOfferDataLoaded = action.payload;
    });
});
