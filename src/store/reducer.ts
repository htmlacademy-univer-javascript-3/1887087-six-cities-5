import {DefaultCity} from '../consts.ts';
import {offerProps} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action.ts';

const initialState = {
  City: DefaultCity,
  Offers: offerProps,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.City = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.Offers = offerProps;
    });
});
