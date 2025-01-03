import {SingleOfferState} from '../../types/state.ts';
import { StoreNamespace } from '../../types/store-namespace.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offer.ts';
import {SingleOffer} from '../../types/single-offer.ts';
import {Review} from '../../types/review.ts';
import {fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOffer} from '../api-actions.ts';

const initialState: SingleOfferState = {
  IsLoaded: false,
  NearbyOffers: [],
  Offer: null,
  Reviews: [],
};

export const singleOfferProcess = createSlice({
  name: StoreNamespace.SingleOffer,
  initialState,
  reducers: {
    setSingleOffer: (state, action: PayloadAction<{ offer: SingleOffer }>) => {
      state.Offer = action.payload.offer;
    },
    setNearbyOffers: (
      state,
      action: PayloadAction<{ nearbyOffers: Offers }>
    ) => {
      state.NearbyOffers = action.payload.nearbyOffers;
    },
    setReviews: (
      state,
      action: PayloadAction<{ reviews: Review[] }>
    ) => {
      state.Reviews = action.payload.reviews;
    },
    setSingleOfferLoadingStatus: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.IsLoaded = action.payload;
    },
    sendReview: (state, action: PayloadAction<Review>) => {
      state.Reviews.push(action.payload);
    },
    updateSingleOfferFavoritesStatus: (state) => {
      if (state.Offer !== null) {
        state.Offer.isFavorite = !state.Offer?.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(fetchSingleOffer.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchSingleOffer.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchSingleOffer.pending, (state) => {
        state.IsLoaded = false;
      });
  },
});

export const {
  setSingleOffer,
  setNearbyOffers,
  setReviews,
  sendReview,
  setSingleOfferLoadingStatus,
  updateSingleOfferFavoritesStatus,
} = singleOfferProcess.actions;
