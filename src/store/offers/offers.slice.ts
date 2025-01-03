import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {City} from '../../types/city';
import {OffersState} from '../../types/state.ts';
import {DefaultCity} from '../../consts.ts';
import {StoreNamespace} from '../../types/store-namespace.ts';
import {fetchOffers} from '../api-actions.ts';
import {Offers} from '../../types/offer.ts';

export const initialState: OffersState = {
  City: DefaultCity,
  Offers: [],
  IsLoaded: false,
};

export const dataProcess = createSlice({
  name: StoreNamespace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.City = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offers>) => {
      state.Offers = action.payload;
    },
    markAsFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      const offerIndex = state.Offers.findIndex(
        (offer) => offer.id === id
      );
      if (offerIndex !== -1) {
        state.Offers[offerIndex].isFavorite = !state.Offers[offerIndex].isFavorite;
      }
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(fetchOffers.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.IsLoaded = true;
      });
  },
});

export const { setCity, setOffers, markAsFavorite } = dataProcess.actions;
